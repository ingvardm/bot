module.exports = [
    {
        path: '/',
        callback: (req, res) => res.send('working!')
    },
    {
        path: '/webhook/',
        callback: (req, res) => {
            if(req.query['hub.verify_token'] === 'enkqwenfkevkzxieckvulafpfhdahkrulshtv')
                res.send(req.query['hub.challange'])
            else res.send('nope!')
        }
    }
]