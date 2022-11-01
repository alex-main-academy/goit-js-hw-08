import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeVideoElement = document.querySelector('iframe');
const vimeoPlayer = new Vimeo(iframeVideoElement);
const vimeoPlayerTime = localStorage.getItem('videoplayer-current-time');

const saveVideoTimeToLC = time => {
  localStorage.clear();
  localStorage.setItem('videoplayer-current-time', time);
};

const onPlay = ({ seconds }) => {
  saveVideoTimeToLC(seconds);
};

vimeoPlayer.on('timeupdate', throttle(onPlay, 1000));
vimeoPlayer.setCurrentTime(vimeoPlayerTime);
