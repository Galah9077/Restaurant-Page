function createNavbar() {
    const navBar = document.querySelector('#navBar');
    navBar.classList.add('navBar')

    // Title // 
    const titleDiv = document.createElement('div');
    navBar.appendChild(titleDiv);

    const nameHeading = document.createElement('h1');
    nameHeading.textContent = 'Le-Der Kangaroo';
    titleDiv.appendChild(nameHeading);

    // Buttons //
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');

    const menuBtn = document.createElement('button')
    const contactBtn = document.createElement('button')
    const homeBtn = document.createElement('button');

    menuBtn.classList.add('menuBtnL');
    homeBtn.classList.add('homeBtn');
    contactBtn.classList.add('contactBtn');

    buttonDiv.appendChild(homeBtn);
    buttonDiv.appendChild(menuBtn);
    buttonDiv.appendChild(contactBtn);

    menuBtn.textContent = 'MENU';
    contactBtn.textContent = 'CONTACT';
    homeBtn.textContent = 'HOME';

    navBar.appendChild(buttonDiv);
};

export { createNavbar }
