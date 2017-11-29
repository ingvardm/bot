const tokens = {
    FB_PAGE_ACCESS_TOKEN: process.env.FB_PAGE_ACCESS_TOKEN,
    FB_VERIFY_TOKEN: process.env.FB_VERIFY_TOKEN,
    APP_SECRET: process.env.APP_SECRET,
}

const defaultPort = 8080

module.exports = {
    tokens,
    defaultPort,
    facebookPostMessage: {
        "uri": "https://graph.facebook.com/v2.6/me/messages",
        "qs": { "access_token": tokens.FB_PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": ""
    }
}