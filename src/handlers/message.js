const callSendAPI = require('./call-send-api')

const message = (sender_psid, received_message) => {
    let response;
    if (received_message.text) {
        response = {
            "text": `You sent the message: "${received_message.text}". Now send me an image!`
        }
    }
    callSendAPI(sender_psid, response)
}

module.exports = message