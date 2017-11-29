const controller = require('./controller')
const startServer = require('./start-server')
const setupPlugins = require('./setup-plugins')
const attachEvents = require('./attach-events')
const bot = controller.spawn({})

const initialize = (port) => {
    startServer(port, bot)
    setupPlugins()
    configureMessenger()
    attachEvents()
}

module.exports = initialize