// const express = require('express')
// const bodyParser = require('body-parser')
// const routs = require('./src/routs')
const { defaultPort } = require('./config')
const { getMissingTokens, logErrorAndExit } = require('./tools')
const bot = require('./src/bot')

const missingTokens = getMissingTokens()
missingTokens.length && logErrorAndExit(`Error: missing some tokens: ${missingTokens.join(', ')}`)

// const app = express()
const port = process.env.PORT || defaultPort
bot.initialize(port)

// app.set('port', port)
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// routs.get.forEach(rout => app.get(rout.path, rout.callback))
// routs.post.forEach(rout => app.post(rout.path, rout.callback))

// app.listen(port, () => {
//     console.log(`running on localhost:${port}/`)
// })