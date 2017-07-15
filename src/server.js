import hapi, { Server } from 'hapi';
import nunjucks from 'nunjucks';

const server = new Server();
server.connection({
  host: 'localhost',
  port: 8067
});

const io = require('socket.io')(server.listener);
// var io = require('socket.io').listen(server.listener);

nunjucks.configure('./src/views');

io.on('connect', function(socket) {
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);
  });
});

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
