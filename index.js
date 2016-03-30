var hej = require('cool-ascii-faces');
var cloudinary = require('cloudinary');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Configure Cloudinary access
cloudinary.config({ 
  cloud_name: 'sgil', 
  api_key: '784949991342827', 
  api_secret: 'JQDfPxlF5F2aUYunN2Zc0eAp8_M' 
});

response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
response.setHeader("Pragma", "no-cache"); // HTTP 1.0.
response.setHeader("Expires", "0"); // Proxies.

app.get('/', function(request, response) {
  response.render('pages/index',{user: "Nisse",title:"sgil.se", bild:cloudinary.image("raspberry_pi_camera", {format: "jpg", width: 1280, height: 720, crop: "fill"})});
  
  });

app.get('/hej', function(request, response) {
	response.send(hej());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});