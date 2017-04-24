var app = require('express')();
var bodyParser = require('body-parser');

var PORT =  process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('*', function(req, res) {
  console.log('POST ' + req.originalUrl);
  console.log(req.body);
  console.log();
  res.end();
});

app.listen(PORT);
