import Notiflix from 'notiflix';
const form = document.querySelector('.form');

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

const activation = (event) => {
  event.preventDefault();

  let delay = parseInt(form.delay.value, 10);
  let step = parseInt(form.step.value, 10);
  let amount = parseInt(form.amount.value, 10);

  for (let i = 1; i <= amount; i++) {
    if (i === 1) {
      createPromise(i, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });
    } else {
        createPromise(i, step)
          .then(({ position, delay }) => {
            Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
            Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
          });
    }
  }
};

form.addEventListener("submit", activation);



