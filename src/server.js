import hapi, { Server } from 'hapi';
import nunjucks from 'nunjucks';
import fetch from 'node-fetch'
import backlogData from './mocks/backlog.mock';

const server = new Server();
server.connection({
  host: 'localhost',
  port: 8010
});

const io = require('socket.io')(server.listener);

nunjucks.configure('./src/views');

io.on('connect', function(socket) {
  console.log('a user connected, current user count: ', Object.keys(io.engine.clients));

  socket.on('disconnect', function(){
    console.log('user disconnected, current user count: ', Object.keys(io.engine.clients));
  });
});

io.on('connection', socket => {
  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);
  });

  socket.on('vote', msg => {
    console.log('starting vote', msg);
    io.emit('vote start', 'started');
    const sendMessage = (topic, message) => io.emit(topic, message);
    startCountdown(sendMessage);
  });

  let unestimatedStories;
  socket.on('request backlog', msg => {
    unestimatedStories = backlogData.issues.map(m => ({ key: m.key, summary: m.fields.summary, description: m.fields.description }));
    io.emit('backlog received', unestimatedStories);
  });

  socket.on('select current story', key => {
    const currentStory = unestimatedStories.filter(f => f.key === key);
    unestimatedStories = unestimatedStories.filter(f => f.key !== key);
    io.emit('current story updated', currentStory);
    io.emit('backlog received', unestimatedStories);
  });

});

const startCountdown = (sendMessage, seconds = 10, interval = 500) => {
	let remainingSeconds = seconds;
	const countdownInterval = setInterval(() => {
    sendMessage('vote countdown', remainingSeconds);
    if (remainingSeconds <= 0) {
      clearInterval(countdownInterval)
      sendMessage('vote end', 'vote ended');
    }
		remainingSeconds--;
	}, interval)

}

const startServer = () => {

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      nunjucks.render('index.html', {
      name: 'enzo',
    }, function (err, html) {
      reply(html);
    });
    },
  });

  server.start(() => console.log(`server running at ${server.info.uri}`));
}

export { startServer };
