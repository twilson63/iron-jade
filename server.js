var flatiron = require('flatiron'),
  jade = require('jade.plugin'),
  ecstatic = require('ecstatic'),
  app = flatiron.app,
  port = process.env.PORT || 3000;

// plugins
app.use(flatiron.plugins.http);
app.use(jade.plugin, { dir: 'app/views'});

// middleware
app.http.before = [
  ecstatic(__dirname + '/public', { autoIndex: false })];

// routes
require('./app')(app);

// start app
app.start(port, function(){
  console.log('Server listening on ' + port.toString() + '\nPress CTRL-C to stop server...');
});