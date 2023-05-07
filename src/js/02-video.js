import player from './02-vimeo.js';
import { updateLocalStorage, getCurrentTime } from './02-localstorage.js';

player.on('play', () => {
  console.log('played the video!');
});

player.on('timeupdate', data => {
  const currentTime = data.seconds;
  updateLocalStorage(currentTime);
});

const savedTime = getCurrentTime();
if (savedTime) {
  player
    .setCurrentTime(savedTime)
    .then(() => {
      console.log(`Video resumed from ${savedTime} seconds`);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
