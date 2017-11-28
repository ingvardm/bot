const tokens = {
    FB_PAGE_ACCESS_TOKEN: process.env.FB_PAGE_ACCESS_TOKEN,
    FB_VERIFY_TOKEN: process.env.FB_VERIFY_TOKEN
}

module.exports = {
    tokens,
    facebookPostMessage: {
        "uri": "https://graph.facebook.com/v2.6/me/messages",
        "qs": { "access_token": tokens.FB_PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": ""
    }
}