// # GLOBAL

menuList = document.querySelector(".menu-list");
btnMenu = document.querySelector(".btn__menu-mobile--open");

itensList = document.querySelectorAll(".list__itens");
dropdownList = document.querySelector(".dropdown__list");

// # EVENT

btnMenu.addEventListener("click", showMenuMobile);

for (let i in itensList){
    itensList[i].addEventListener("mouseover", showDropdownMenu);
}

// for (let i in dropdownList){
//     itensList[i].addEventListener("click", showDropdownMenu);
// }

// # FUNCTION

function showMenuMobile(){
    console.log("ok");

    menuList.classList.toggle("menu-list--hidden");
    btnMenu.classList.toggle("btn__menu-mobile--close");
}

function showDropdownMenu(){
    console.log(this);

    dropdownList.classList.toggle("dropdown--hidden");
}