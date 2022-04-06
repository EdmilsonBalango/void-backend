const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


const dbName = 'ubi-database';
client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const collection = db.collection('users');



module.exports = collection