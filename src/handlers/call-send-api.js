const { facebookPostMessage } = require('../../config')
const request = require('request')

const callSendAPI = (sender_psid, response) => {
    let message = facebookPostMessage
    message.json = {
        "recipient": {
            "id": sender_psid
        },
        "message": response
    }

    request(, (err, res, body) => {
        if (!err) {
            console.log('message sent!')
        } else {
            console.error("Unable to send message:" + err);
        }
    });
}

module.exports = callSendAPI