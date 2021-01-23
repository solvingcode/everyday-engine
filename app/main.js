define(function (require) {
    const Application = require('./core/Application.js')
    const Scene = require('./loop/Scene.js')
    const Setup = require('./loop/Setup.js')

    let app = new Application([Setup, Scene])

    app.start()
})