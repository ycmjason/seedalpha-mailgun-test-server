var app = require('express')();
var multer = require('multer');

var PORT =  process.env.PORT || 3000;


app.post('*', multer().none(), function(req, res) {
  console.log('POST ' + req.originalUrl);
  console.log(req.body);
  console.log();
  res.end();
});

app.listen(PORT);
