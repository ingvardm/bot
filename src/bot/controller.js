const botConfig = require('./bot-config')
const Botkit = require('botkit')

const controller = Botkit.facebookbot(botConfig)

module.exports = controller