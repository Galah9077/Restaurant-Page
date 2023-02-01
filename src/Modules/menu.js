function loadMenu() {

    const content = document.querySelector('#content');
    content.innerHTML = ' ';

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu');
    menuContent.innerHTML = '<p>Kangaroo Burger mit Sourkraut und in a Croissant Bun: $20 aud</p><p>Snails + Vegmite on toasted Rye Bread: $12 aud </p>';

    content.appendChild(menuContent);


}

export { loadMenu }