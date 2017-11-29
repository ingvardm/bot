module.exports = {
    trigger: ['quick'],
    actions: 'message_received',
    callback: (bot, message) => {
        bot.reply(message, {
            text: 'Hey! This message has some quick replies attached.',
            quick_replies: [
                {
                    "content_type": "text",
                    "title": "Yes",
                    "payload": "yes",
                },
                {
                    "content_type": "text",
                    "title": "No",
                    "payload": "no",
                }
            ]
        });

    }
}