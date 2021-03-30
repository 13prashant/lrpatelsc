const mobileMenu = document.querySelector('.mobile-menu')
const nav = document.querySelector('nav')
const img = document.querySelector('.cover-pic')

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('navigation-active')
    img.classList.toggle('cover-pic-down')
})