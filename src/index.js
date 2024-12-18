import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';

function clearContent() {
    const content = document.getElementById('content');
    content.replaceChildren();
}

function createNavButton(id, text, iconClass) {
    const button = document.createElement('button');
    button.id = id;

    const icon = document.createElement('i');
    icon.className = iconClass;

    const buttonText = document.createElement('span');
    buttonText.textContent = text;

    button.appendChild(icon);
    button.appendChild(buttonText);

    return button;
}

function initializeWebsite() {
    const nav = document.querySelector('nav');

    const homeBtn = createNavButton('home-btn', 'Home', 'fas fa-home');
    const menuBtn = createNavButton('menu-btn', 'Menu', 'fas fa-utensils');
    const contactBtn = createNavButton('contact-btn', 'Contact', 'fas fa-address-book');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    const content = document.getElementById('content');
    content.appendChild(createHomePage());

    homeBtn.addEventListener('click', () => {
        clearContent();
        content.appendChild(createHomePage());
    });

    menuBtn.addEventListener('click', () => {
        clearContent();
        content.appendChild(createMenuPage());
    });

    contactBtn.addEventListener('click', () => {
        clearContent();
        content.appendChild(createContactPage());
    });
}

document.addEventListener('DOMContentLoaded', initializeWebsite);

export default initializeWebsite;