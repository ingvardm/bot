const { FB_PAGE_ACCESS_TOKEN } = require('../tokens')
const { subscribe } = require('../handlers')

module.exports = [
    {
        path: '/webhook/',
        callback: (req, res) => {
            let body = req.body;
            if (body.object === 'page') {
                body.entry.forEach(entry => {
                    let webhook_event = entry.messaging[0];
                    let sender_psid = webhook_event.sender.id;
                    console.log('Sender PSID: ' + sender_psid);
                });
                res.status(200).send('EVENT_RECEIVED');

            } else {
                res.sendStatus(404);
            }
        }
    }
]