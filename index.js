const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const routs = require('./src/routs')

console.log(routs)

const app = express()
const port = process.env.PORT || 5000

app.set('port', port)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// Object.keys(routs).forEach(rout => app.get(rout, routs[rout]))

routs.forEach(rout => app.get(rout.path, rout.callback))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})