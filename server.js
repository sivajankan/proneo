var express = require('express');
var app = express();
var path = require('path');

app.locals.title = "Nodejs File Uploader";
app.locals.email = "sivajankan@gmail.com";

require('./router/routes')(app);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));


var server = app.listen(3001, function(){
  console.log("We have started our server on port 3001");
});