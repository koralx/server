var express = require('express');
var path = require('path');

var app = express();

let port = 25300

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//start/server

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;

