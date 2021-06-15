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
import AVariable from '../flow/variable/AVariable.js'
import OnAnimationStartEvent from '../flow/event/native/OnAnimationStartEvent.js'
import AAnimation from '../flow/animation/AAnimation.js'
import ActivateAnimationFunction from '../flow/function/native/animation/ActivateAnimationFunction.js'
import AComponent from '../flow/component/AComponent.js'
import SetFunction from '../flow/function/native/component/SetFunction.js'
import OnUpdateEvent from '../flow/event/native/OnUpdateEvent.js'
import GetFunction from '../flow/function/native/component/GetFunction.js'
import GreaterThanOrEqualFunction from '../flow/function/native/basic/GreaterThanOrEqualFunction.js'
import FalseCondition from '../flow/condition/FalseCondition.js'
import AndFunction from '../flow/function/native/basic/AndFunction.js'
import OrFunction from '../flow/function/native/basic/OrFunction.js'
import NotFunction from '../flow/function/native/basic/NotFunction.js'
import RoundFunction from '../flow/function/native/basic/RoundFunction.js'
import IsGroundedFunction from '../flow/function/native/physics/IsGroundedFunction.js'

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
            new OnAnimationStartEvent(),
            new OnUpdateEvent(),

            // Condition
            new TrueCondition(),
            new FalseCondition(),

            // Function
            new LogFunction(),
            new AddFunction(),
            new LessThanFunction(),
            new GreaterThanFunction(),
            new GreaterThanOrEqualFunction(),
            new IsKeyDownFunction(),
            new GetInputXAxisFunction(),
            new MultiplyFunction(),
            new EqualToFunction(),
            new NotEqualToFunction(),
            new AndFunction(),
            new OrFunction(),
            new NotFunction(),
            new RoundFunction(),

            //Unit
            new GetWorldPositionFunction(),
            new SetWorldPositionFunction(),
            new GetUnitFunction(),

            //Animation
            new ActivateAnimationFunction(),

            //Component
            new SetFunction(),
            new GetFunction(),

            //Physics
            new MoveXAxisFunction(),
            new ApplyForceFunction(),
            new GetVelocityXFunction(),
            new GetVelocityYFunction(),
            new IsGroundedFunction(),

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
     * @param {AFunction} instance
     */
    tryRegister(instance){
        super.tryRegister(instance)
    }

    /**
     * @param {string} name
     * @return {AFunction}
     */
    tryGetInstance(name) {
        return super.tryGetInstance(name)
    }

    /**
     * @param {string} name
     * @return {AFunction}
     */
    getInstance(name) {
        return super.getInstance(name)
    }

    /**
     * @override
     * @param {Class} className
     * @return {AFunction[]}
     */
    getClassInstance(className) {
        return super.getClassInstance(className)
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
                !(instance instanceof AAnimation) &&
                !(instance instanceof AKeyCode) &&
                !(instance instanceof AVariable) &&
                !(instance instanceof AComponent)
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
     * @return {ACondition[]}
     */
    getConditionInstances(){
        return super.getInstances().filter(instance => instance instanceof ACondition)
    }

}