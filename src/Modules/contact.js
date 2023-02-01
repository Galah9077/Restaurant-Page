function loadContact() {

    const content = document.querySelector('#content');
    content.innerHTML = ' ';

    const contactContent = document.createElement('div');
    // menuContent.classList.add('menu');
    contactContent.innerHTML = '<p><b>Address:</b></p> <p>1234 Fake Street,</p><p>Berlin 12163</p><p>'
    content.appendChild(contactContent)



}
export { loadContact }