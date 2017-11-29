const { FB_PAGE_ACCESS_TOKEN, FB_VERIFY_TOKEN, APP_SECRET, MONGODB_URI, PORT } = process.env

module.exports = {
    tokens: {
        FB_PAGE_ACCESS_TOKEN,
        FB_VERIFY_TOKEN,
        APP_SECRET
    },
    port: PORT || 8080,
    db: {
        uri: MONGODB_URI
    }
}