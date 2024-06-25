importScripts('https://www.gstatic.com/firebasejs/5.5.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.4/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '840914260922'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
// self.addEventListener('push', function (event) {
//   // メッセージを表示する
//   var data = {};
//   if (event.data) {
//     data = event.data.json();
//   }
//   // var title = data.notification.title || "無題";
//   // var message = data.notification.body || "メッセージが届いています。";
//   var message = "メッセージが届いています。";
//   var title = "無題";
//   event.waitUntil(
//     self.registration.showNotification(title, {
//       'body': message
//     })
//   );
// });