define(function (require) {
    const Window = require('./Window.js')
    const Menu = require('../setup/Menu.js')

    class Application {
        constructor(renderer, camera) {
            this.title = 'Combat Simulation'
            this.renderer = renderer
            this.camera = camera
            this.window = new Window()
            this.menu = new Menu()
            this.startTimeFPS = Date.now()
            this.nbFrame = 0
            this.runLoop = this.runLoop.bind(this)
        }

        start() {
            this.renderer.init()
            this.runLoop()
        }

        loadEvents() {
            this.window.initEvents()
        }

        runLoop() {
            this.updateFPS()
            this.renderer.clear()
            this.renderer.render(this.camera, this.menu)
            requestAnimationFrame(this.runLoop)
        }

        init() {
            this.loadEvents()
        }

        updateFPS() {
            const deltaTime = (Date.now() - this.startTimeFPS) / 1000
            if (deltaTime > 1) {
                document.title = `${this.title} - (${parseInt(this.nbFrame / deltaTime)} FPS)`
                this.nbFrame = 0
                this.startTimeFPS = Date.now()
            } else {
                this.nbFrame++
            }
        }
    }

    return Application
})