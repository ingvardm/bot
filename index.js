const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const routs = require('./src/routs')

const app = express()
const port = process.env.PORT || 8080

app.set('port', port)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

routs.get.forEach(rout => app.get(rout.path, rout.callback))
routs.post.forEach(rout => app.post(rout.path, rout.callback))

app.listen(port, () => {
    console.log(`running on localhost:${port}/`)
})