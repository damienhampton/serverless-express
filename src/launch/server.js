'use strict'
const app = require('../lib/express-create').create();
const uri = 'mongodb://mongo:27017/testdb';

async function main(){
  const driver = await require('../lib/mongo-wrapper').init({ uri });
  const appDb = require('../app/my-app-database').init({ driver });

  const myApp = require('../app/my-app').init({ app, appDb });

  const port = 3000;
  const host = '0.0.0.0';

  myApp.listen(port, host);
}

main();
