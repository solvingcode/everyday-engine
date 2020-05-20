define(function (require) {
    const Camera = require('/src/core/Camera.js')
    const Renderer = require('/src/renderer/Renderer.js')
    const Application = require('/src/core/Application.js')

    var camera = new Camera({ x: 50000, y: 1000 })
    var renderer = new Renderer()
    var app = new Application(renderer, camera)

    app.start()
})