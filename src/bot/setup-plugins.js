const controller = require('./controller')

const setupPlugins = () => {
    controller.api.nlp.enable()
}

module.exports = setupPlugins