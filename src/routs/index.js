module.exports = [
    {
        path: '/',
        callback: (req, res) => res.send('working!')
    },
    {
        path: '/test_rout',
        callback: (req, res) => res.send('test rout')
    },
    {
        path: '/say/:word',
        callback: (req, res) => res.send(req.params.word)
    }
]