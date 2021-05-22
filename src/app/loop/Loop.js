import OnMouseClickEvent from '../flow/event/native/OnMouseClickEvent.js'
import LogFunction from '../flow/function/native/basic/LogFunction.js'
import AddFunction from '../flow/function/native/basic/AddFunction.js'
import World from '../world/World.js'
import OnKeyDownEvent from '../flow/event/native/OnKeyDownEvent.js'
import TrueCondition from '../flow/condition/TrueCondition.js'
import LessThanFunction from '../flow/function/native/basic/LessThanFunction.js'
import IsKeyDownFunction from '../flow/function/native/basic/IsKeyDownFunction.js'
import GetWorldPositionFunction from '../flow/function/native/unit/GetWorldPositionFunction.js'
import VectorFunction from '../flow/function/native/structure/VectorFunction.js'
import SetWorldPositionFunction from '../flow/function/native/unit/SetWorldPositionFunction.js'
import GetUnitFunction from '../flow/function/native/unit/GetUnitFunction.js'
import OnInputXAxisEvent from '../flow/event/native/OnInputXAxisEvent.js'

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
            // Event
            new OnMouseClickEvent(),
            new OnKeyDownEvent(),
            new OnInputXAxisEvent(),

            // Condition
            new TrueCondition(),

            // Function
            new LogFunction(),
            new AddFunction(),
            new LessThanFunction(),
            new IsKeyDownFunction(),

            //Unit
            new GetWorldPositionFunction(),
            new SetWorldPositionFunction(),
            new GetUnitFunction(),

            //Structure
            new VectorFunction()
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