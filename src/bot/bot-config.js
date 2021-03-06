const { FB_PAGE_ACCESS_TOKEN, FB_VERIFY_TOKEN, APP_SECRET } = require('../../config').tokens
const DB = require('../db')
const botConfig = {
    debug: true,
    log: true,
    access_token: FB_PAGE_ACCESS_TOKEN,
    verify_token: FB_VERIFY_TOKEN,
    app_secret: APP_SECRET,
    validate_requests: true,
    storage: DB
}

module.exports = botConfig