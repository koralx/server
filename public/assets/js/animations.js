let body = document.body
let header = document.querySelector('.header')
let main = document.querySelector('.main')

setTimeout(() => {
    header.style.opacity = 1
    
}, 1000);
setTimeout(()=>{
    header.style.transition = 'none'
}, 2000)

setTimeout(() => {
    main.style.opacity = 1
    
}, 1500);
setTimeout(() => {
    main.style.transition = 'none'
}, 3000)