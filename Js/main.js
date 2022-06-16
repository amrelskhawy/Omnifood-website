
const toggle = document.querySelector('.toggle-icon'),
    exit = document.querySelector('.exit-icon'),
    header = document.querySelector('header'),
    headerUl = document.querySelector('header ul.links'),
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



// Toggle NavBar
toggle.addEventListener('click', ()=> {
    headerUl.classList.add('show')
})

exit.addEventListener('click', ()=> {
    headerUl.classList.remove('show')
})




const links = document.querySelectorAll('.link')
links.forEach(link => {
    link.addEventListener('click', ()=> {
        links.forEach(link => {
            link.classList.remove('active')
        })
        link.classList.add('active')
        headerUl.classList.remove('show')
    })
})

const sections = document.querySelectorAll('section[id]')

const scrollActive = function() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58 ,
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`a[href*="${sectionId}"]`).classList
            .add('active')
        } else {
            document.querySelector(`a[href*="${sectionId}"]`).classList
            .remove('active')
        }
    })

    
}
window.addEventListener("scroll", scrollActive);