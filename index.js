const connect = require('connect')
const port = 8080

connect().listen(port, function(){
    console.log(`Server running on ${port}`)
});