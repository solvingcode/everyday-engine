import Registry from './Registry.js'
import AEvent from '../flow/event/AEvent.js'
import AConstant from '../flow/constant/AConstant.js'
import ACondition from '../flow/condition/ACondition.js'
import AUnit from '../flow/unit/AUnit.js'
import AKeyCode from '../flow/keycode/AKeyCode.js'
import OnMouseClickEvent from '../flow/event/native/OnMouseClickEvent.js'
import OnKeyDownEvent from '../flow/event/native/OnKeyDownEvent.js'
import OnInputXAxisEvent from '../flow/event/native/OnInputXAxisEvent.js'
import TrueCondition from '../flow/condition/TrueCondition.js'
import LogFunction from '../flow/function/native/basic/LogFunction.js'
import AddFunction from '../flow/function/native/basic/AddFunction.js'
import LessThanFunction from '../flow/function/native/basic/LessThanFunction.js'
import IsKeyDownFunction from '../flow/function/native/basic/IsKeyDownFunction.js'
import GetInputXAxisFunction from '../flow/function/native/input/GetInputXAxisFunction.js'
import GetWorldPositionFunction from '../flow/function/native/unit/GetWorldPositionFunction.js'
import SetWorldPositionFunction from '../flow/function/native/unit/SetWorldPositionFunction.js'
import GetUnitFunction from '../flow/function/native/unit/GetUnitFunction.js'
import VectorFunction from '../flow/function/native/structure/VectorFunction.js'
import MoveXAxisFunction from '../flow/function/native/physics/MoveXAxisFunction.js'
import MultiplyFunction from '../flow/function/native/basic/MultiplyFunction.js'
import OnInputYAxisEvent from '../flow/event/native/OnInputYAxisEvent.js'
import OnInputJumpEvent from '../flow/event/native/OnInputJumpEvent.js'
import ApplyForceFunction from '../flow/function/native/physics/ApplyForceFunction.js'
import GetVelocityXFunction from '../flow/function/native/physics/GetVelocityXFunction.js'
import GetVelocityYFunction from '../flow/function/native/physics/GetVelocityYFunction.js'
import GreaterThanFunction from '../flow/function/native/basic/GreaterThanFunction.js'
import EqualToFunction from '../flow/function/native/basic/EqualToFunction.js'
import NotEqualToFunction from '../flow/function/native/basic/NotEqualToFunction.js'

export default class FunctionRegistry extends Registry{

    constructor() {
        super('function')
    }

    /**
     * @override
     */
    init(){
        this.concatRegistry([
            // Event
            new OnMouseClickEvent(),
            new OnKeyDownEvent(),
            new OnInputXAxisEvent(),
            new OnInputYAxisEvent(),
            new OnInputJumpEvent(),

            // Condition
            new TrueCondition(),

            // Function
            new LogFunction(),
            new AddFunction(),
            new LessThanFunction(),
            new GreaterThanFunction(),
            new IsKeyDownFunction(),
            new GetInputXAxisFunction(),
            new MultiplyFunction(),
            new EqualToFunction(),
            new NotEqualToFunction(),

            //Unit
            new GetWorldPositionFunction(),
            new SetWorldPositionFunction(),
            new GetUnitFunction(),

            //Physics
            new MoveXAxisFunction(),
            new ApplyForceFunction(),
            new GetVelocityXFunction(),
            new GetVelocityYFunction(),

            //Structure
            new VectorFunction()
        ])
    }

    /**
     * @param {AFunction} instance
     */
    register(instance) {
        super.register(instance)
    }

    /**
     * @param {string} name
     * @return {AFunction}
     */
    getInstance(name) {
        return super.getInstance(name)
    }

    /**
     * @param {number} id
     * @return {AFunction}
     */
    getInstanceById(id) {
        return super.getInstanceById(id)
    }

    /**
     * @param {string} className
     * @return {AFunction[]}
     */
    getInstancesByClass(className) {
        return this.getInstances().filter(instance => instance.isInstanceOfClass(className))
    }

    /**
     * @param {string} className
     */
    removeInstancesByClass(className){
        _.remove(this.getInstances(), (instance) => instance.isInstanceOfClass(className))
    }

    /**
     * @return {AFunction[]}
     */
    getInstances() {
        return super.getInstances()
    }

    /**
     * @return {AFunction[]}
     */
    getOtherInstances(){
        return super.getInstances()
            .filter(instance =>
                !(instance instanceof AEvent) &&
                !(instance instanceof AConstant) &&
                !(instance instanceof ACondition) &&
                !(instance instanceof AUnit) &&
                !(instance instanceof AKeyCode)
            )
    }

    /**
     * @return {AEvent[]}
     */
    getEventInstances(){
        return super.getInstances().filter(instance => instance instanceof AEvent)
    }

    /**
     * @return {AConstant[]}
     */
    getConstantInstances(){
        return super.getInstances().filter(instance => instance instanceof AConstant)
    }

    /**
     * @return {AKeyCode[]}
     */
    getKeyCodeInstances(){
        return super.getInstances().filter(instance => instance instanceof AKeyCode)
    }

    /**
     * @return {ACondition[]}
     */
    getConditionInstances(){
        return super.getInstances().filter(instance => instance instanceof ACondition)
    }

}