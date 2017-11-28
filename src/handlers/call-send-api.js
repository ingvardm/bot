const { facebookPostMessage } = require('../../config')
const request = require('request')

const error = e => {
    if (!e) console.log('message sent!')
    else console.error(`Unable to send message: ${e}`)
}

const callSendAPI = (sender_psid, response) => {
    let message = facebookPostMessage
    message.json = {
        "recipient": { "id": sender_psid },
        "message": response
    }
    request(message, error)
}

module.exports = callSendAPI