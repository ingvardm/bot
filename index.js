const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
const port = process.env.PORT || 5000

app.set('port', port)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('working!')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})