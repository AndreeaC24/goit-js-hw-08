import { handleSubmit } from './03-form.js';
import { datesFromStorage } from './03-feedbackStorage.js';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', handleSubmit);
window.addEventListener('load', datesFromStorage);
