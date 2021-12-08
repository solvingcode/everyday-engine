import Window from './Window.js'
import RunnerHandler from './RunnerHandler.js'

/**
 * Define the application main
 */
class Application {

    /**
     * @type {Loop[]}
     */
    loops

    /**
     * @param {Loop[]} loops
     */
    constructor(loops) {
        this.loops = loops
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
        this.loops.forEach(loop => {
            const loopInstance = loop.get()
            RunnerHandler.get().handle(loopInstance.getRunners())
            loopInstance.loop()
        })
        this.window.clear()
        this.window.update()
        requestAnimationFrame(this.loop)
    }

}

export default Application