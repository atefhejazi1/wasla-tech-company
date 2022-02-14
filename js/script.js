// let date = document.querySelector('.date')
// date.innerHTML = new Date().getFullYear()

let navbar = document.querySelector('.navbar');
let navbarItem = document.querySelectorAll('.navbar .navbar-collapse .navbar-nav .nav-item .nav-link');
window.onscroll = function () {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-changebg-color');
        navbar.classList.add('fixed-top');
        for (let index = 0; index < navbarItem.length; index++) {
            navbarItem[index].classList.add('navbar-changecolor-item');
        }
    } else {
        navbar.classList.remove('navbar-changebg-color');
        navbar.classList.remove('fixed-top');
        for (let index = 0; index < navbarItem.length; index++) {
            navbarItem[index].classList.remove('navbar-changecolor-item');
        }
    }
}
