const {FB_VERIFY_TOKEN} = require('../../config').tokens

const subscribe = token => token === FB_VERIFY_TOKEN

module.exports = subscribe