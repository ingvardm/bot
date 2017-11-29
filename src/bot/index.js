const controller = require('./controller')
const botMenu = require('./menu')
const conversations = require('./conversations')

const initialize = (port) => {
    let bot = controller.spawn({})

    controller.setupWebserver(port, function (err, webserver) {
        controller.createWebhookEndpoints(webserver, bot, function () {
            console.log('ONLINE!');
        });
    });

    controller.api.nlp.enable();
    controller.api.messenger_profile.greeting('Hello! I\'m a Botkit bot!');
    // controller.api.messenger_profile.get_started('sample_get_started_payload');
    // controller.api.messenger_profile.menu(botMenu)

    conversations.forEach(entry => {
        let { trigger, actions, callback } = entry
        controller.hears(trigger, actions, callback);
    })
}

module.exports = { initialize }