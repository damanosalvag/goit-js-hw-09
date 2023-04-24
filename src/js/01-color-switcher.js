
// const startBtn = document.querySelector('button[data-start]');
// const stopBtn = document.querySelector('button[data-stop]');
// const body = document.querySelector('body');

// let timer = null;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// };

// startBtn.addEventListener('click', () => {
//     timer = setInterval(() => { body.style.background = getRandomHexColor() },1000);
// });

// stopBtn.addEventListener('click', ()=> {
//     clearInterval(timer);
// });

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', () => {
    const timer = setInterval(() => { body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}` },1000);
    stopBtn.addEventListener('click', () => clearInterval(timer));
});


