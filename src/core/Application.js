define(function (require) {
    const Window = require('./Window.js')
    const Menu = require('../layout/Menu.js')
    const EventHandler = require('./EventHandler.js')
    const World = require('../world/World.js')
    const Renderer = require('../renderer/Renderer.js')
    const ExceptionHandler = require('../exception/ExceptionHandler.js')

    /**
     * Define the application main
     */
    class Application {
        constructor() {
            this.title = 'Combat Simulation'
            this.renderer = new Renderer()
            this.exceptionHandler = ExceptionHandler.get()
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
            Window.get().initEvents()
        }

        /**
         * Start the loop animation frame
         */
        runLoop() {
            try {
                const world = World.get()
                const menu = Menu.get()
                menu.update()
                EventHandler.get().handle(Window.get())
                world.update()
                world.draw(this.renderer)
                this.renderer.clear()
                this.renderer.render(world.getCamera(), menu)
            }catch (e) {
                this.exceptionHandler.handle(e)
            }
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