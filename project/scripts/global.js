export const dateTime = new Date();

const hamButton = document.getElementById('hamButton');
hamButton.addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('show');
    hamButton.classList.toggle('active');
});

const darkModeButton = document.getElementById('darkModeButton');
darkModeButton.addEventListener('click', () => {
    localStorage.setItem('darkMode', localStorage.getItem('darkMode') == 'on' ? 'off' : 'on');
    loadStyle()
});

const root = document.documentElement;
const headerLogo = document.getElementById('headerLogo');
const darkModeIcon = document.getElementById('darkModeIcon');

document.getElementById('copyright').innerHTML = `&copy; ${dateTime.getFullYear()} Sean Wood`;

function loadStyle() {
    if (localStorage.getItem('darkMode') === 'on') {
        headerLogo.src = 'images/logo/red-ember-horizontal-dark-mode.png';
        darkModeIcon.src = 'images/global/dark-theme-dark-mode.svg';
        root.style.setProperty('--primary', '#2b2b2b');
        root.style.setProperty('--primary-hover', '#3c3c3c');
        root.style.setProperty('--secondary', '#f4f4f4');
    } else {
        headerLogo.src = 'images/logo/red-ember-horizontal.png';
        darkModeIcon.src = 'images/global/dark-theme.svg';
        root.style.setProperty('--primary', '#f4f4f4');
        root.style.setProperty('--primary-hover', '#d5d3d3');
        root.style.setProperty('--secondary', '#404040');
    }
};

loadStyle();