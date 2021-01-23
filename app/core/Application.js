define(function (require) {

    const Window = require('./Window.js')
    const EventHandler = require('./EventHandler.js')
    const ExceptionHandler = require('../exception/ExceptionHandler.js')

    /**
     * Define the application main
     */
    class Application {

        /**
         * @param {Class<Loop>[]} loops
         */
        constructor(loops) {
            this.loops = loops
            this.exceptionHandler = ExceptionHandler.get()
            this.window = Window.get()
            this.loop = this.loop.bind(this)
        }

        async start() {
            this.window.init()
            await Promise.all(this.loops.map(loop => loop.get().init()))
            this.loop()
        }

        /**
         * @private
         */
        loop() {
            try {
                this.loops.forEach(loop => {
                    const loopInstance = loop.get()
                    EventHandler.get().handle(Window.get(), loopInstance.getRunners())
                    loopInstance.loop()
                })
            } catch (e) {
                this.exceptionHandler.handle(e)
            }
            this.window.clear()
            requestAnimationFrame(this.loop)
        }

    }

    return Application
})