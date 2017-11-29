const { tokens } = require('./config')

const getMissingTokens = () => Object.keys(tokens).filter(token => !tokens.token)
const logErrorAndExit = message => {
    console.error(message)
    process.exit(1)
}

module.exports = { getMissingTokens, logErrorAndExit }