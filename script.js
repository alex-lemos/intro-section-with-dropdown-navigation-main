// # GLOBAL

menuList = document.querySelector(".nav-list");
btnMenu = document.querySelector(".btn__menu-mobile--open");

// # EVENT

btnMenu.addEventListener("click", showMenuMobile);

// # FUNCTION

function showMenuMobile(){
    menuList.classList.toggle("nav-list--hidden");
    btnMenu.classList.toggle("btn__menu-mobile--close");
}