const controller = require('./controller')
const conversations = require('./conversations')

const attachEvents = () => {
    conversations.forEach(entry => {
        let { trigger, actions, callback } = entry
        controller.hears(trigger, actions, callback)
    })
}

module.exports = attachEvents