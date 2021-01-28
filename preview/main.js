define(function (require) {
    import Application from '/app/core/Application.js'
    import PreviewGame from '/app/loop/PreviewGame.js'

    let app = new Application([PreviewGame])
    app.start()
})