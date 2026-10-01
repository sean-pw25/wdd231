export const dateTime = Date();

const hamButton = document.getElementById('hamButton');
hamButton.addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('show');
    hamButton.classList.toggle('active');
});

const darkModeButton = document.getElementById('darkModeButton');
darkModeButton.addEventListener('click', () => localStorage.setItem('darkMode', localStorage.getItem('darkMode') == 'on' ? 'off' : 'on'))
