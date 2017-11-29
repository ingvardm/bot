const { FB_PAGE_ACCESS_TOKEN, FB_VERIFY_TOKEN, APP_SECRET, MONGODB_URI } = process.env
const tokens = { FB_PAGE_ACCESS_TOKEN, FB_VERIFY_TOKEN, APP_SECRET }
const db = { uri: MONGODB_URI }
const port = process.env.PORT || 8080

module.exports = { tokens, port, db }