define(function (require) {
    const Window = require('./Window.js')
    const Menu = require('../layout/Menu.js')
    const AppState = require('./AppState.js')
    const EventHandler = require('./EventHandler.js')
    const World = require('../world/World.js')

    class Application {
        constructor(renderer, camera) {
            this.title = 'Combat Simulation'
            this.renderer = renderer
            this.camera = camera
            this.window = Window.get()
            this.world = new World()
            this.menu = Menu.get()
            this.appState = AppState.get()
            this.event = EventHandler.get()
            this.startTimeFPS = Date.now()
            this.nbFrame = 0
            this.runLoop = this.runLoop.bind(this)
        }

        /**
         * Start the application
         */
        start() {
            this.renderer.init()
            this.init()
            this.runLoop()
        }

        /**
         * Load event listeners
         */
        loadEvents() {
            this.window.initEvents()
        }

        /**
         * Start the loop animation frame
         */
        runLoop() {
            this.updateFPS()
            this.event.handle(this.window)
            this.world.load()
            this.world.update()
            this.world.draw(this.renderer)
            this.renderer.clear()
            this.renderer.render(this.camera, this.menu)
            requestAnimationFrame(this.runLoop)
        }

        /**
         * Initialize the application
         */
        init() {
            this.loadEvents()
        }

        /**
         * Update the FPS and show it in the title
         */
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