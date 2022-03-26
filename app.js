const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const notifyServiceSid = process.env.NOTIFY_SERVICE_SID;

const client = require('twilio')(accountSid, authToken);

client.notify.services(notifyServiceSid)
  .notifications.create({
    toBinding: JSON.stringify([
      binding_type: 'sms', address: '** 15752689458 **',
      binding_type: 'sms', address: '** 17205255575 **',
      // This also works for iOS, Android, and FB Messenger.
      // You can mix and match binding_type in the toBinding.
    ]),
    body: 'Justus just sent you a message through Twilio!'
  })
  .then(notification => console.log(notification.sid))
  .catch(error => console.log(error));
