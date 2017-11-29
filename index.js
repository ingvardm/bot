const { port, tokens } = require('./config')
const { getMissingTokens, logErrorAndExit } = require('./tools')
const bot = require('./src/bot')

const missingTokens = getMissingTokens(tokens)

if(missingTokens.length)
    logErrorAndExit(`Missing tokens: ${missingTokens.join(', ')}`)

bot.initialize(port)