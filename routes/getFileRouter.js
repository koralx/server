const Router = require('express');
const fs = require('fs')
const router = new Router()

var filesForDownloadDir = './files';

function countDigits(n) {
  for(var i = 0; n > 1; i++) {
     n /= 10;
  }
  return i;
}

const downloadblock = function(name, size, index) {
  return `<div class="main_block main_grid-3_block-1-3" onclick="downloadFile('${name}')" data-indexFile="${index}" data-nameFile="${name}"> 
    <i class="fas fa-download"></i>
    <div class="main_grid-3_file-info">
        <p class="file-name">${name}</p>
        <p class="file-size">${size}</p>
    </div>
  </div>`
}

let result

router.post('/get', (req, res)=>{
    console.log(req.ip);
    let filesFromDownloadFolder = fs.readdirSync(filesForDownloadDir)
    let fileIndex = 0
    result = {}
    filesFromDownloadFolder.forEach(file => {
      var fileSize = fs.statSync(filesForDownloadDir + "/" + file).size
      if (countDigits(fileSize) <= 6) {
        fileSize = (fs.statSync(filesForDownloadDir + "/" + file).size / 1024).toFixed(2) + 'KB'
        result[fileIndex] = downloadblock(file, fileSize, fileIndex)
        fileIndex++
        return
      }
      fileSize = (fs.statSync(filesForDownloadDir + "/" + file).size / (1024 * 1024)).toFixed(2) + 'MB'
      result[fileIndex] = downloadblock(file, fileSize, fileIndex)
      fileIndex++
    })
    let json = JSON.stringify(result)
    res.json(json)
})

router.get('/download/*', (req, res)=>{
    let fileName = req.params[0]
    res.download(filesForDownloadDir + '/' + fileName)
})

module.exports = router