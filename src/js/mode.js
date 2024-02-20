const modeEl = document.querySelector('.mode');
const body = document.querySelector('body');

const checkLocal = localStorage.getItem('mode') ? localStorage.getItem('mode') : false;

if(checkLocal){
    body.classList.add('dark-mode');
}

modeEl.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    checkLocal ? localStorage.setItem('mode', '') : localStorage.setItem('mode', 'dark-mode');
})