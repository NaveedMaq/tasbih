import notificationSound from './sounds/notification-sound.mp3';

const audio = new Audio(notificationSound);
audio.preload = 'auto';

export function playNotificationSound() {
  audio.play();
}
