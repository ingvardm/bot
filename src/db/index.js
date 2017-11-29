const mongoDbUri = require('../../config').db.uri
const defaultTables = require('./default-tables')
const DB = require('botkit-storage-mongo')({mongoUri: mongoDbUri, defaultTables})

module.exports = DB