const tokens = {
    FB_PAGE_ACCESS_TOKEN: process.env.FB_PAGE_ACCESS_TOKEN,
    FB_VERIFY_TOKEN: process.env.FB_VERIFY_TOKEN,
    APP_SECRET: process.env.APP_SECRET,
}

const port = process.env.PORT || 8080

module.exports = { tokens, port }