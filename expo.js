const expo = require('expo-server-sdk');

// Create a new Expo SDK client
const expo = new Expo();
// Send a push notification to a specific device
const pushToken = 'ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]';
const notification = {
  to: pushToken,
  sound: 'default',
  title: 'Notification Title',
  body: 'Notification body',
  data: { data: 'goes here' },
};
expo.sendPushNotificationAsync(notification).then(() => {
  console.log('Push notification sent successfully!');
});
