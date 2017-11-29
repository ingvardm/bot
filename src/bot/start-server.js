const controller = require('./controller')

const success = () => console.log('ONLINE!')

const startServer = (port, bot) => {
    controller.setupWebserver(port, (err, webserver) => {
        controller.createWebhookEndpoints(webserver, bot, success)
    });
}

module.exports = startServer