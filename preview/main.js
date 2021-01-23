define(function (require) {
    const Application = require('../app/core/Application.js')
    const Game = require('../app/loop/Game.js')

    let app = new Application([Game])
    app.start()
})