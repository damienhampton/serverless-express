const express = require('express');
const bodyParser = require('body-parser');

function create(){
  const app = express();
  const jsonParser = bodyParser.json();
  app.use(jsonParser);
  return app;
}
module.exports = { create };