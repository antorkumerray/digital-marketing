let menu = document.getElementById('menu');
let mobilemenu = document.getElementById('mobile-menu');

mobilemenu.onclick = () => {
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
}