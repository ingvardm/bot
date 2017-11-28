const Generic = require('./Generic')

const elements = [{
    title: "title",
    subtitle: "Tap a button to answer.",
    image_url: '',
    buttons: [
        {
            type: "postback",
            title: "Yes!",
            payload: "yes",
        },
        {
            type: "postback",
            title: "No!",
            payload: "no",
        }
    ],
}]

class Image extends Generic {
    constructor(url){
        super()
        this.payload.elements = elements
        this.payload.elements[0].image_url = url
    }
}

module.exports = Image