module.exports = function(app) {
  app.router.get('/', function() {
    app.render(this.res, 'index', { title: 'Hello World'});
  });
}