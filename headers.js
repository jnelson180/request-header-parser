var express = require('express');
var app = express();

app.get('/', function(req, res) {
	console.log("Visitor to home page.");
  var ip = req.ip;
  var findLang = /^[a-zA-Z]*-?[a-zA-Z]*/gi;
  var lang = String(req.headers['accept-language']).match(findLang)[0];
  var findSoftware = (/\((.+?)\)/g).exec(req.headers['user-agent']);
  var software = findSoftware[1];
  var sendData = JSON.stringify({ ipaddress: ip,  language: lang,  software: software });
  console.log(sendData);
  res.send(sendData);
});

/* FOR LOCAL TESTING
app.listen("8080", function () {
  console.log('Header parser service listening on port 8080');
});
*/

FOR PROD  
app.listen(process.env.PORT, function () {
  console.log('Timestamp microservice listening on port ' + process.env.PORT);
});




