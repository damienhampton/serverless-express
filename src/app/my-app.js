'use strict';

function init({ app, appDb, logger = (...args) => console.log(...args) }){

  app.use(async (req, res) => {
    const log = { url: req.url, date: (new Date).toISOString()};
    await appDb.insertLog(log);
    logger(log);

    const logs = await appDb.getLogs();
    res.json(logs);
  });

  return app;
}

module.exports = { init };