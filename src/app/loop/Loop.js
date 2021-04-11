/**
 * @class {Loop}
 */
import EventRegistry from '../flow/event/EventRegistry.js'
import OnMouseClickEvent from '../flow/event/native/OnMouseClickEvent.js'
import FunctionRegistry from '../flow/function/FunctionRegistry.js'
import LogFunction from '../flow/function/native/LogFunction.js'
import AddFunction from '../flow/function/native/AddFunction.js'

class Loop {

    constructor() {
        this.loop = this.loop.bind(this)
        this.runners = []
        EventRegistry.get().init([
            new OnMouseClickEvent()
        ])
        FunctionRegistry.get().init([
            new LogFunction(),
            new AddFunction()
        ])
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

    async init() {
        throw new TypeError('Loop.init must be implemented!')
    }

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