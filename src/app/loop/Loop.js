import OnMouseClickEvent from '../flow/event/native/OnMouseClickEvent.js'
import LogFunction from '../flow/function/native/LogFunction.js'
import AddFunction from '../flow/function/native/AddFunction.js'
import World from '../world/World.js'
import OnKeyDownEvent from '../flow/event/native/OnKeyDownEvent.js'
import TrueCondition from '../flow/condition/TrueCondition.js'
import LessThanFunction from '../flow/function/native/LessThanFunction.js'

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
            new OnKeyDownEvent(),
            new TrueCondition(),
            new LogFunction(),
            new AddFunction(),
            new LessThanFunction()
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