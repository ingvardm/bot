module.exports = [
    {
        "locale": "default",
        "composer_input_disabled": true,
        "call_to_actions": [
            {
                "title": "My Skills",
                "type": "nested",
                "call_to_actions": [
                    {
                        "title": "Hello",
                        "type": "postback",
                        "payload": "Hello"
                    },
                    {
                        "title": "Hi",
                        "type": "postback",
                        "payload": "Hi"
                    }
                ]
            },
            {
                "type": "web_url",
                "title": "Botkit Docs",
                "url": "https://github.com/howdyai/botkit/blob/master/readme-facebook.md",
                "webview_height_ratio": "full"
            }
        ]
    },
    {
        "locale": "zh_CN",
        "composer_input_disabled": false
    }
]