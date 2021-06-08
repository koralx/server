var express               =            require('express');
var bodyParser            =            require("body-parser");
var path                  =            require('path');
var fs                    =            require('fs');

const urlencodedParser = bodyParser.text()

var filesForDownloadDir = './files';

var app = express();

let port = 80

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//start/server

const downloadblock = function(name, size, index) {
  return `<div class="main_block main_col-3_col-1-3" onclick="downloadFile('${name}')" data-indexFile="${index}" data-nameFile="${name}"> 
    <i class="fas fa-download"></i>
    <div class="main_col-3_file-info">
        <p class="file-name">${name}</p>
        <p class="file-size">${size + 'MB'}</p>
    </div>
  </div>`
}

app.get('/', (req, res) => {
  res.render('index')


})

let result

app.post('/getFiles', (req, res) => {
  let filesFromDownloadFolder = fs.readdirSync(filesForDownloadDir)
  let fileIndex = 0
  result = {}
  filesFromDownloadFolder.forEach(file => {
      var fileSize = fs.statSync(filesForDownloadDir + "/" + file).size / (1024 * 1024)
      result[fileIndex] = downloadblock(file, fileSize.toFixed(2), fileIndex)
      fileIndex++
  })
  let json = JSON.stringify(result)
  res.json(json)
})

app.get('/download/*', urlencodedParser, function (req, res){
  let fileName = req.params[0]
  console.log(fileName);
  res.download(filesForDownloadDir + '/' + fileName)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;

