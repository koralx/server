let cubes = document.querySelectorAll('.loading_cube')
let loadWindow = document.querySelector('.loading')
let cubeZoomed
let body = document.body

body.classList.add('overflow-h')

function anim(time) {
    cubes.forEach(cube => {
        time += 250
        setTimeout(()=>{
            cube.classList.add('loading_cube_zoom')
        }, time)
    });
    time = 1250
    cubes.forEach(cube => {
        time += 250
        setTimeout(()=>{
            cube.classList.remove('loading_cube_zoom')
        }, time)
    });

}

anim(250)

setTimeout(() => {
    loadWindow.classList.add('hide')
    body.classList.remove('overflow-h')
}, 2500);

