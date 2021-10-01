const $mainNav = document.querySelector(".main-nav");
const $btnMenu = document.querySelector(".menu-button");

function clickButtonMenu() {
   if($btnMenu.classList.contains("-active")) {
      $mainNav.classList.remove("-active")
      $btnMenu.classList.remove("-active")
   } else {
      $mainNav.classList.add("-active")
      $btnMenu.classList.add("-active")
   }
}

$btnMenu.addEventListener("click", clickButtonMenu)