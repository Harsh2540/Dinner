self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('notificationclick', event => {
  event.notification.close();
});
