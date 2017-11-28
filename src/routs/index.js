module.exports = [
    {
        path: '/',
        callback: (req, res) => res.send('working!')
    },
    {
        path: '/webhook/',
        callback: (req, res) => {
            if(req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me')
                res.send(req.query['hub.challange'])
            else res.send('nope!')
        }
    }
]