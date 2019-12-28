module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index.html');
  });
  app.get('/holder', function(req, res) {
    // added_191209
    res.render('holder.html');
  });
  app.get('/about', function(req, res) {
    res.render('about.html');
  });
};
