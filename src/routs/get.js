const { subscribe } = require('../handlers')

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
            if (mode === 'subscribe') {
                if (subscribe(token)) res.status(200).send(challenge)
                else return res.sendStatus(403)
            }
        }
    }
]