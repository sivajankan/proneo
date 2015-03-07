module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index.html');
  });
  
  app.get('/about', function(req, res){
    res.render('about.html');
  });
  
  app.get('/file_uploader', function(req, res){
    res.render('file_uploader.html');
  });
  
};
