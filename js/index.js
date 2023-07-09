window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('menu-black');
    } else {
        header.classList.remove('menu-black');
    }
});
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const menuList = document.querySelector('.menu ul');

mobileMenuIcon.addEventListener('click', function () {
    menuList.classList.toggle('active');
});