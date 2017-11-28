const {FB_VERIFY_TOKEN, FB_PAGE_ACCESS_TOKEN} = require('../tokens')

module.exports = [
    {
        path: '/',
        callback: (req, res) => res.send('working!')
    },
    {
        path: '/webhook/',
        callback: (req, res) => {
            let mode = req.query['hub.mode']
            let token = req.query['hub.verify_token']
            let challenge = req.query['hub.challenge']
            if (mode === 'subscribe' && token === FB_VERIFY_TOKEN) {
                console.log('WEBHOOK_VERIFIED')
                res.status(200).send(challenge)
            }
            console.log('VERIFICATION_ERROR')
            res.sendStatus(403)
        }
    }
]