import throttle from 'lodash.throttle';

const storageKey = 'videoplayer-current-time';

export const updateLocalStorage = throttle(time => {
  localStorage.setItem(storageKey, time);
}, 1000);

export const getCurrentTime = () => {
  return localStorage.getItem(storageKey);
};
