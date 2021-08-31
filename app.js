var express               =            require('express');
var bodyParser            =            require("body-parser");
var path                  =            require('path');
var fs                    =            require('fs');

const urlencodedParser = bodyParser.text()

var app = express();

let port = 8080

// Routes
const getFilesRouter = require('./routes/getFileRouter');
app.use("/files", getFilesRouter)

// app.use

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//start/server

app.listen(port)

// main

app.get('/', (req, res) => {
  res.render('index')
})

