'use strict';
const serverless = require('serverless-http');
const app = require('../lib/express-create').create();

const driver = require('../app/dynamodb-wrapper').init();
const appDb = require('../app/my-app-database').init({ driver });

const myApp = require('../app/my-app').init({ app, appDb });

module.exports.api = serverless(myApp);

