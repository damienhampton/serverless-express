'use strict';

function init({ app, appDb, logger = (...args) => console.log(...args) }){

  app.use(async (req, _, next) => {
    const log = { url: req.url, date: (new Date).toISOString()};
    await appDb.insertLog(log);
    logger(log);
    next();
  });

  app.get('/log-test', async (_, res) => {
    const logs = await appDb.getLogs();
    res.send(logs);
  });

  app.get('*', (_, res) => {
    res.status(400).json({ message: 'bad request' });
  });

  return app;
}

module.exports = { init };