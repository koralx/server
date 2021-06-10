let status = false

function showAllElements(btn) {
    let grids = document.querySelector('.main_grid-3')
    let grid = document.querySelectorAll('.main_grid-3_block-1-3')

    let showHide = document.querySelector('.fa-chevron-down')

    /*let show = document.querySelector('.fa-chevron-down')
    let hide = document.querySelector('.fa-chevron-up')*/

    if(status == false) {
        /*show.classList.add('hide')
        hide.classList.remove('hide')*/
        
        /*grid.forEach(block => {
            block.classList.remove('hide')
        });*/
        showHide.classList.add('transform360deg')   

        grids.classList.add('main_grid-3_expansion') 

        status = true
        return
    }
    if (status == true) {
        /*hide.classList.add('hide')
        show.classList.remove('hide')*/
        showHide.classList.remove('transform360deg')  
        grids.classList.remove('main_grid-3_expansion') 

        /*grid.forEach(block => {
            if(block.getAttribute('data-indexFile') > 5) {
                block.classList.add('hide')
            }
        });*/

        status = false
    }
}