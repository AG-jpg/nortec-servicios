$(document).ready(function() {
    
    const mainMenu = document.querySelector('.mainmenu');
    const closeMenu = document.querySelector('.closemenu');
    const openMenu = document.querySelector('.fa-bars');

    openMenu.addEventListener('click', show);
    closeMenu.addEventListener('click', close);

    function show(){
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
    }

    function close(){
        mainMenu.style.display = 'none';
    }
});