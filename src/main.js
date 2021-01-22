define(function (require) {
    const Application = require('/src/core/Application.js')
    const Scene = require('/src/loop/Scene.js')
    const Setup = require('/src/loop/Setup.js')

    let app = new Application([Setup, Scene])

    app.start()
})