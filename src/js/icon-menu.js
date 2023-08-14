function toggleMenu() {
    var menuButton = document.getElementById('menuButton');
    var menu = document.getElementById('menu');
    
    menu.classList.toggle('menu-opened');
    menuButton.classList.toggle('open-icon');
    menuButton.classList.toggle('close-icon');
}