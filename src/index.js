import './style.css';
import { loadHome } from './home';
import { loadPage } from './page';
import { loadAbout } from './about';
import { loadMenu } from './menu';

//this is the initial page load 
init();

//this is where we will begin listening for actions

function events() {
    const homelink = document.getElementById('home');
    const menulink = document.getElementById('menu');
    const aboutlink = document.getElementById('about');

    homelink.addEventListener('click', loadHome);
    menulink.addEventListener('click', loadMenu);
    aboutlink.addEventListener('click', loadAbout);
}

function init() {
    loadPage();
    loadHome();
    events();
}