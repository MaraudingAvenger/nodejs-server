const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

exports.mongoConnect = callback => {
  let url = 'mongodb://localhost:27017';
  let dbName = 'node-js'
  MongoClient.connect(url)
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database connection!"
}
