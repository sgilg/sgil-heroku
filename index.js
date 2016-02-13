var hej = require('cool-ascii-faces');
var cloudinary = require('cludinary');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// Configure Cloudinary access
cloudinary.config({ 
  cloud_name: 'sgil', 
  api_key: '784949991342827', 
  api_secret: 'JQDfPxlF5F2aUYunN2Zc0eAp8_M' 
});

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index',{user: "Great User",title:"homepage"});
  cloudinary.url("raspberry_pi_camera.jpg", { width: 1280, height: 720, crop: "fill" });
});

app.get('/hej', function(request, response) {
	response.send(hej());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});