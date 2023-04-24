// Descrito en la documentación
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
// Importación adicional de estilos
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button[data-start]');
const timer = [
    document.querySelector('[data-days]'),
    document.querySelector('[data-hours]'),
    document.querySelector('[data-minutes]'),
    document.querySelector('[data-seconds]'),
];

startBtn.disabled = true;
let milSeg = 0;
let date = new Date();


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: date,
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] > date) {
            startBtn.disabled = false;
            milSeg = selectedDates[0] - date;
            return milSeg;
        } else {
            Notiflix.Notify.failure('Please choose a date in the future');
        };
    },
};

flatpickr("input#datetime-picker", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    let validation = value < 10 ? value.toString().padStart(2,'0') : value;
    return validation;
};


const startClick = () => {
    let timerRepeat = setInterval(() => {
        if (milSeg > 0) {
            const { days, hours, minutes, seconds } = convertMs(milSeg);
            const timeValues = [days, hours, minutes, seconds];
      
            for (let i = 0; i < timeValues.length; i++) {
                timer[i].textContent = addLeadingZero(timeValues[i]);
            }
            console.log(convertMs(milSeg));
            milSeg -= 1000;
        } else {
            clearInterval(timerRepeat);
        };
    }, 1000);
};


startBtn.addEventListener('click', startClick)