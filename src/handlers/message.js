const callSendAPI = require('./call-send-api')
const { Image } = require('../templates')

const message = (sender_psid, received_message) => {
    let response;
    if (received_message.text) {
        response = {
            "text": `You sent the message: "${received_message.text}". Now send me an image!`
        }
    } else if (received_message.attachments) {
        let attachment_url = received_message.attachments[0].payload.url
        response = new Image(attachment_url)
        console.log(response)
    }
    callSendAPI(sender_psid, response)
}

module.exports = message