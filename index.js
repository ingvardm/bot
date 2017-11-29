const { port, tokens } = require('./config')
const { getMissingTokens, logErrorAndExit } = require('./tools')
const bot = require('./src/bot')

const missingTokens = getMissingTokens(tokens)

missingTokens.length && logErrorAndExit(`Error: missing some tokens: ${missingTokens.join(', ')}`)
bot.initialize(port)