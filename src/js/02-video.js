import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentTime = 'video-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function onPlay(event) {
  localStorage.setItem(currentTime, event.seconds);
}

function setCurrentTime() {
  const PlayerCurrentTime = localStorage.getItem(currentTime);

  if (PlayerCurrentTime) {
    player.setCurrentTime(PlayerCurrentTime).then(function (seconds) {});
  }
}

player.on('timeupdate', throttle(onPlay, 1000));
setCurrentTime();