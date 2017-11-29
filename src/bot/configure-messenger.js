const controller = require('./controller')
const botMenu = require('./menu')

const configureMessenger = () => {
    controller.api.messenger_profile.greeting('Hello! I\'m a Botkit bot!');
    controller.api.messenger_profile.get_started('sample_get_started_payload');
    controller.api.messenger_profile.menu(botMenu)
}

module.exports = configureMessenger