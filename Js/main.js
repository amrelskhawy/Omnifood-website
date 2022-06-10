
const toggle = document.getElementById('toggle-icon'),
    exit = document.getElementById('exit-icon'),
    header = document.querySelector('header'),
    toUp = document.querySelector('.to-up')

toUp.addEventListener('click' , ()=> window.scrollTo(0,0))

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.classList.add('scrolled')
        toUp.classList.add('scrolled')
        

    }
    else {
        header.classList.remove('scrolled')
        toUp.classList.remove('scrolled')
        
    }    
})



exit.addEventListener('click', ()=> {
    console.log("Clicked")
})