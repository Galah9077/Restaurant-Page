import loadPage from './Modules/loadPage.js';
import { createNavbar } from './Modules/navbar.js';
import { loadMenu } from './Modules/menu.js';
import { loadContact } from './Modules/contact.js';

loadPage();
createNavbar();



const content = document.querySelector('#content');

const homeBtn = document.querySelector('.homeBtn');
homeBtn.addEventListener('click', () => {
    content.innerHTML = ' ';
    loadPage();
});

const menuBtn = document.querySelector('.menuBtnL');
menuBtn.addEventListener('click', () => {
    loadMenu();
});

const contactBtn = document.querySelector('.contactBtn');
contactBtn.addEventListener('click', () => {
    loadContact();
});



