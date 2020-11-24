define(function (require) {
    const Window = require('./Window.js')
    const Menu = require('../layout/Menu.js')
    const EventHandler = require('./EventHandler.js')
    const World = require('../world/World.js')
    const Renderer = require('../renderer/Renderer.js')

    /**
     * Define the application main
     */
    class Application {
        constructor() {
            this.title = 'Combat Simulation'
            this.renderer = new Renderer()
            this.window = Window.get()
            this.world = World.get()
            this.menu = Menu.get()
            this.event = EventHandler.get()
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
            this.menu.update()
            this.event.handle(this.window)
            this.world.load()
            this.world.update()
            this.world.draw(this.renderer)
            this.renderer.clear()
            this.renderer.render(this.world.getCamera(), this.menu)
            requestAnimationFrame(this.runLoop)
        }

        /**
         * Initialize the application
         */
        init() {
            this.loadEvents()
        }
    }

    return Application
})