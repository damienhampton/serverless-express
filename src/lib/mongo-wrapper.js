'use strict'
const { ObjectID, MongoClient } = require('mongodb');

async function init({ uri }){
  const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const connection = await mongoClient.connect();

  function insertOne(dbname, collection, object){
    return connection
      .db(dbname)
      .collection(collection)
      .insertOne(object);
  }

  function find(dbname, collection, query){
    return connection
      .db(dbname)
      .collection(collection)
      .find(query);
  }

  return {
    /* insert app mongo functions here */
    insertLog(log){
      return insertOne('testdb', 'logs', log);
    },
    getLogs(){
      return find('testdb', 'logs').toArray();
    }
  }
}

module.exports = { init };