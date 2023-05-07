import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

export function datesFromStorage() {
  const feedbackFormStateKey = 'feedback-form-state';
  const x = localStorage.getItem(feedbackFormStateKey);

  if (x) {
    const { email, message } = JSON.parse(x);
    form.email.value = email;
    form.message.value = message;
  }
}

const throttledatesFromStorage = throttle(datesFromStorage, 500);
window.addEventListener('load', throttledatesFromStorage);
