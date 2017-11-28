const generic = elements => ({
    attachment: {
        type: 'template',
        payload: {
            template_type: 'generic',
            elements
        }
    }
})

module.exports = generic