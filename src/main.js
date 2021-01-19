define(function (require) {
    const Application = require('/src/core/Application.js')
    const Game = require('/src/loop/Game.js')
    const Setup = require('/src/loop/Setup.js')

    let app = new Application([Setup, Game])

    app.start()
})