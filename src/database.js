import { connect, connection } from 'mongoose';

const HOSTED_DB_URL = `mongodb://enzo:99231830@enzocluster-shard-00-00-qiceh.mongodb.net:27017,enzocluster-shard-00-01-qiceh.mongodb.net:27017,enzocluster-shard-00-02-qiceh.mongodb.net:27017/testDB?ssl=true&replicaSet=enzocluster-shard-0&authSource=admin`;
const LOCAL_DB_URL = 'mongodb://localhost/local';

const connectToDatabase = () => {
  connect(LOCAL_DB_URL);
  connection.on('error', () => console.log('connection error'));
  connection.once('open', () => console.log('connected to db'));
}

export { connectToDatabase };
