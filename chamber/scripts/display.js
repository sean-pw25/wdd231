const darkBtn = document.querySelector('#dark-mode-toggle');



darkBtn.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark');
}
)