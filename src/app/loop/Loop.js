import OnMouseClickEvent from '../flow/event/native/OnMouseClickEvent.js'
import LogFunction from '../flow/function/native/LogFunction.js'
import AddFunction from '../flow/function/native/AddFunction.js'
import World from '../world/World.js'

class Loop {

    constructor() {
        this.loop = this.loop.bind(this)
        this.runners = []
    }

    /**
     * @type {Class[]}
     */
    runners

    /**
     * @return {Class[]}
     */
    getRunners() {
        return this.runners
    }

    async init(){
        const world = World.get()
        world.getFunctionRegistry().init([
            new OnMouseClickEvent(),
            new LogFunction(),
            new AddFunction()
        ])
        await this.doInit()
    }

    /**
     * @abstract
     */
    async doInit() {
        throw new TypeError('Loop.init must be implemented!')
    }

    /**
     * @abstract
     */
    loop() {
        throw new TypeError('Loop.loop must be implemented!')
    }

    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}

export default Loop