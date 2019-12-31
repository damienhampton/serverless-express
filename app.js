'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = new express();

const jsonParser = bodyParser.json()

app.use(jsonParser, (req, res) => {
  console.log(req.body);
  res.json(miniReq(req));
})

function miniReq({ url, method,
  statusCode, body, baseUrl,
  originalUrl, _parsedUrl, params, query }){
  return {
    url,
    method,
    statusCode,
    body,
    baseUrl,
    originalUrl,
    _parsedUrl,
    params,
    query
  }
}

module.exports = app;