const callSendAPI = require('./call-send-api')
const templates = require('../templates')

const message = (sender_psid, received_message) => {
    let response;
    if (received_message.text) {
        response = {
            "text": `You sent the message: "${received_message.text}". Now send me an image!`
        }
    } else if (received_message.attachments) {
        let attachment_url = received_message.attachments[0].payload.url
        // response = {attachment: new Image(attachment_url)}
        // console.log(response)
        // console.log(response.attachment.payload.elements[0])
        response = templates.generic([
            {
                title: 'first item',
                subtitle: 'best item ever',
                image_url: attachment_url,
                buttons: [
                    {
                        "type": "postback",
                        "title": "Yes!",
                        "payload": "yes",
                    },
                    {
                        "type": "postback",
                        "title": "No!",
                        "payload": "no",
                    }
                ]
            },
            {
                title: 'first item',
                subtitle: 'best item ever',
                image_url: attachment_url,
                buttons: [
                    {
                        "type": "postback",
                        "title": "Yes!",
                        "payload": "yes",
                    },
                    {
                        "type": "postback",
                        "title": "No!",
                        "payload": "no",
                    }
                ]
            },
            {
                title: 'first item',
                subtitle: 'best item ever',
                image_url: attachment_url,
                buttons: [
                    {
                        "type": "postback",
                        "title": "Yes!",
                        "payload": "yes",
                    },
                    {
                        "type": "postback",
                        "title": "No!",
                        "payload": "no",
                    }
                ]
            }
        ])
    }
    callSendAPI(sender_psid, response)
}

module.exports = message