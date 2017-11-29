const { defaultPort } = require('./config')
const { getMissingTokens, logErrorAndExit } = require('./tools')
const bot = require('./src/bot')

const port = process.env.PORT || defaultPort
const missingTokens = getMissingTokens()

missingTokens.length && logErrorAndExit(`Error: missing some tokens: ${missingTokens.join(', ')}`)
bot.initialize(port)