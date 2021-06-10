fetch('/files/get', {
    method: 'POST',
    headers: {
        'Content-type': 'application/x-www-form-urlencoded'
    }
})
.then(response => response.json())
.then(data => {
    let object = JSON.parse(data)
    let col3 = document.querySelector('.main_grid-3')
    let rs = ""
    for (const key in object) {
        rs = rs + object[key]
    }
    col3.innerHTML = rs

    /*let downloadBlock = document.querySelectorAll('.main_grid-3_block-1-3')
    downloadBlock.forEach(block => {
        if(block.getAttribute('data-indexFile') > 5) {
            block.classList.add('hideblock')
        }
    });*/

});

async function downloadFile(nameFile) {
    window.open('/files/download/' + nameFile)
}