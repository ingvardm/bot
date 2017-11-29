const controller = require('../controller')

module.exports = {
    trigger: ['attachment_upload'],
    actions: 'message_received',
    callback: (bot, message) => {
        let attachment = {
            "type": "image",
            "payload": {
                "url": "https://pbs.twimg.com/profile_images/803642201653858305/IAW1DBPw_400x400.png",
                "is_reusable": true
            }
        };

        controller.api.attachment_upload.upload(attachment, function (err, attachmentId) {
            if (err) {
                console.log('Error while uploading attachment')
            } else {
                var image = {
                    "attachment": {
                        "type": "image",
                        "payload": {
                            "attachment_id": attachmentId
                        }
                    }
                };
                bot.reply(message, image)
            }
        });
    }
}