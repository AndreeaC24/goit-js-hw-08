import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const feedbackFormStateKey = 'feedback-form-state';

export function handleSubmit(event) {
  event.preventDefault();
  throttle(() => {
    const objCurrent = {
      email: form.email.value,
      message: form.message.value,
    };
    localStorage.setItem(feedbackFormStateKey, JSON.stringify(objCurrent));
  }, 500)();
  console.log(JSON.parse(localStorage.getItem(feedbackFormStateKey)));
  localStorage.removeItem(feedbackFormStateKey);
}

form.addEventListener('submit', handleSubmit);
