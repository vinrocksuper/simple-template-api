const controllers = require('./controllers');

const router = (app) => {
  app.get('/', controllers.index);

  app.get('/getData', controllers.getData);
  app.get('/results', controllers.results);
  app.get('/*', controllers.notFound);
};

module.exports = router;
