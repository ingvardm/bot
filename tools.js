const getMissingTokens = tokens => Object.keys(tokens).filter(token => !tokens[token])

const logErrorAndExit = message => {
    console.error(`ERROR: ${message}`)
    process.exit(1)
}

module.exports = { getMissingTokens, logErrorAndExit }