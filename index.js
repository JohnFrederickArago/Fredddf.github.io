//Selects the ID and class elements from index.html and assigns it to another variable to be used in Javascript
const toggle_button = document.querySelector('.toggle-button')
const toggle_button_icon = document.querySelector('#toggle-button-icon')
const dropdown_menu = document.querySelector('.dropdown-menu')

//On click, the dropdown menu will be shown
toggle_button.onclick = function () {
  dropdown_menu.classList.toggle('open')
}