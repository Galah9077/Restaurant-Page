import kangaroo1 from '/Users/blackburnm2003/repos/Odin-Project/Restaurant-Page/src/Images/kangaroo.jpg';

function loadPage() {
    // main content // 
    const content = document.querySelector('#content');

    // picture // 
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent')
    content.appendChild(mainContent);

    const kangarooPic = new Image();
    kangarooPic.src = kangaroo1
    kangarooPic.classList.add('rooPicHome');
    mainContent.appendChild(kangarooPic);

    // Blurb // 
    const blurb = document.createElement('div');
    blurb.textContent = 'Welcome to the worlds only French-German-Australian fusion restaurant!';
    content.appendChild(blurb);
};

export default loadPage
