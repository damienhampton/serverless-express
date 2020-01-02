'use strict'
const AWS = require('aws-sdk');
const options = { region: 'eu-west-1' };
const dyndb = new AWS.DynamoDB.DocumentClient(options);

function init(){
  return {
    insertLog(log){
      const { date } = log;
      const item = { date, log };
      return put('logs', item);
    },
    async getLogs(){
      return (await scan('logs')).map(item => item.log);
    }
  }
}

function put(TableName, Item){
  const params = {
    TableName,
    Item
  };
  return dyndb.put(params).promise();
}

async function scan(TableName){
  return (await dyndb.scan({ TableName }).promise()).Items;
}


module.exports = { init };