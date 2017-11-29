const controller = require('../controller')

module.exports = {
    trigger: ['^hello', '^hi'],
    actions: 'message_received,facebook_postback',
    callback: (bot, message) => {
        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!')
            } else {
                bot.reply(message, 'Hello.')
            }
        });
    }
}