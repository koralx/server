fetch('/getFiles', {
    method: 'POST',
    headers: {
        'Content-type': 'application/x-www-form-urlencoded'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
    let object = JSON.parse(data)
    let col2 = document.querySelector('.main_col-3')
    let rs = ""
    for (const key in object) {
        rs = rs + object[key]
    }
    col2.innerHTML = rs
});

async function downloadFile(nameFile) {
    window.open('/download/' + nameFile)
}