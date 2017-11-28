const { FB_PAGE_ACCESS_TOKEN } = require('../tokens')
const { subscribe, message, postBack, callSendApi } = require('../handlers')

module.exports = [
    {
        path: '/webhook/',
        callback: (req, res) => {
            let body = req.body;
            if (body.object === 'page') {
                body.entry.forEach(entry => {
                    let webhook_event = entry.messaging[0];
                    let sender_psid = webhook_event.sender.id;
                    if (webhook_event.message) {
                        message(sender_psid, webhook_event.message);
                    } else if (webhook_event.postback) {
                        postBack(sender_psid, webhook_event.postback);
                    }
                });
                res.status(200).send('EVENT_RECEIVED');

            } else {
                res.sendStatus(404);
            }
        }
    }
]