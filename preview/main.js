define(function (require) {
    const Application = require('/app/core/Application.js')
    const PreviewGame = require('/app/loop/PreviewGame.js')

    let app = new Application([PreviewGame])
    app.start()
})