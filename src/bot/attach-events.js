const controller = require('./controller')
const conversations = require('./conversations')

const attachEvents = () => {
    conversations.forEach(event => {
        let { trigger, actions, callback } = event
        controller.hears(trigger, actions, callback)
    })
}

module.exports = attachEvents