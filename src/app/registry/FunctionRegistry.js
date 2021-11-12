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
import StartAnimationFunction from '../flow/function/native/animation/StartAnimationFunction.js'
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
import OnAnyAnimationStartEvent from '../flow/event/native/OnAnyAnimationStartEvent.js'
import OnInputAttackEvent from '../flow/event/native/OnInputAttackEvent.js'
import StopAnimationFunction from '../flow/function/native/animation/StopAnimationFunction.js'
import IsAnimationPlayingFunction from '../flow/function/native/animation/IsAnimationPlayingFunction.js'
import HasCurrentAnimationFunction from '../flow/function/native/animation/HasCurrentAnimationFunction.js'
import GetCurrentAnimationFunction from '../flow/function/native/animation/GetCurrentAnimationFunction.js'
import IsAnimationEndedFunction from '../flow/function/native/animation/IsAnimationEndedFunction.js'
import GetInputYAxisFunction from '../flow/function/native/input/GetInputYAxisFunction.js'
import ScaleMeshFunction from '../flow/function/native/mesh/ScaleMeshFunction.js'
import AbsFunction from '../flow/function/native/basic/AbsFunction.js'
import GetInstanceFunction from '../flow/function/native/component/GetInstanceFunction.js'
import SetInstanceFunction from '../flow/function/native/component/SetInstanceFunction.js'
import GetAllCollisionFunction from '../flow/function/native/physics/GetAllCollisionFunction.js'
import ALoop from '../flow/loop/ALoop.js'
import ArrayFunction from '../flow/function/native/structure/ArrayFunction.js'
import GetValueFunction from '../flow/function/native/object/GetValueFunction.js'
import IsArrayEmptyFunction from '../flow/function/native/array/IsArrayEmptyFunction.js'
import GetUnitByComponentFunction from '../flow/function/native/component/GetUnitByComponentFunction.js'
import GetComponentFunction from '../flow/function/native/unit/GetComponentFunction.js'
import SubtractFunction from '../flow/function/native/basic/SubtractFunction.js'
import GetTimeFunction from '../flow/function/native/time/GetTimeFunction.js'
import GetVarFunction from '../flow/function/native/component/GetVarFunction.js'
import SetVarFunction from '../flow/function/native/component/SetVarFunction.js'
import DivideFunction from '../flow/function/native/basic/DivideFunction.js'
import AddVectorFunction from '../flow/function/native/basic/AddVectorFunction.js'
import IsUpdateTimeFunction from '../flow/function/native/time/IsUpdateTimeFunction.js'
import PlayAudioFunction from '../flow/function/native/audio/PlayAudioFunction.js'
import IsAudioPlayingFunction from '../flow/function/native/audio/IsAudioPlayingFunction.js'
import FlipScaleFunction from '../flow/function/native/transform/FlipScaleFunction.js'
import AFunctionInput from '../flow/io/AFunctionInput.js'
import AFunctionOutput from '../flow/io/AFunctionOutput.js'
import OnCallEvent from '../flow/event/native/OnCallEvent.js'
import LoadSceneFunction from '../flow/function/native/scene/LoadSceneFunction.js'
import LoadSceneIndexFunction from '../flow/function/native/scene/LoadSceneIndexFunction.js'
import ACustomFunction from '../flow/function/custom/ACustomFunction.js'
import EnableUnitFunction from '../flow/function/native/unit/EnableUnitFunction.js'
import DisableUnitFunction from '../flow/function/native/unit/DisableUnitFunction.js'
import IsUnitPressedFunction from '../flow/function/native/unit/IsUnitPressedFunction.js'
import GetDeltaTimeFunction from '../flow/function/native/time/GetDeltaTimeFunction.js'
import TranslateFunction from '../flow/function/native/transform/TranslateFunction.js'
import MultiplyVectorFunction from '../flow/function/native/basic/MultiplyVectorFunction.js'
import BoxCastFunction from '../flow/function/native/physics/BoxCastFunction.js'
import MoveXYAxisFunction from '../flow/function/native/physics/MoveXYAxisFunction.js'
import GetComponentInstanceFunction from '../flow/function/native/component/GetComponentInstanceFunction.js'
import GetCollisionsFunction from '../flow/function/native/physics/GetCollisionsFunction.js'
import CallFunction from '../flow/function/native/basic/CallFunction.js'
import InstantiateUnitFunction from '../flow/function/native/unit/InstantiateUnitFunction.js'
import AThen from '../flow/promise/AThen.js'
import SetParentUnitFunction from '../flow/function/native/unit/SetParentUnitFunction.js'
import APromise from '../flow/promise/APromise.js'
import ToScreenPositionFunction from '../flow/function/native/transform/ToScreenPositionFunction.js'
import ConcatFunction from '../flow/function/native/basic/ConcatFunction.js'
import ArrayPushFunction from '../flow/function/native/array/ArrayPushFunction.js'
import PhysicsTranslateFunction from '../flow/function/native/physics/PhysicsTranslateFunction.js'
import GetUnitNameFunction from '../flow/function/native/unit/GetUnitNameFunction.js'
import GetUnitTagNameFunction from '../flow/function/native/unit/GetUnitTagNameFunction.js'
import IsFunctionDefinedFunction from '../flow/function/native/basic/IsFunctionDefinedFunction.js'
import SetColorFunction from '../flow/function/native/style/SetColorFunction.js'
import VectorDistanceFunction from '../flow/function/native/basic/VectorDistanceFunction.js'
import SubtractVectorFunction from '../flow/function/native/basic/SubtractVectorFunction.js'
import NormalizeVectorFunction from '../flow/function/native/basic/NormalizeVectorFunction.js'
import GetterFunction from '../flow/function/native/basic/GetterFunction.js'
import DestroyUnitFunction from '../flow/function/native/unit/DestroyUnitFunction.js'
import VectorLerpFunction from '../flow/function/native/basic/VectorLerpFunction.js'
import OnButtonClickEvent from '../flow/event/native/OnButtonClickEvent.js'
import ArraySizeFunction from '../flow/function/native/array/ArraySizeFunction.js'
import ArrayIndexFunction from '../flow/function/native/array/ArrayIndexFunction.js'

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
            new OnAnyAnimationStartEvent(),
            new OnUpdateEvent(),
            new OnInputAttackEvent(),
            new OnCallEvent(),
            new OnButtonClickEvent(),

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
            new GetInputYAxisFunction(),
            new MultiplyFunction(),
            new MultiplyVectorFunction(),
            new EqualToFunction(),
            new NotEqualToFunction(),
            new AndFunction(),
            new OrFunction(),
            new NotFunction(),
            new RoundFunction(),
            new AbsFunction(),
            new SubtractFunction(),
            new DivideFunction(),
            new AddVectorFunction(),
            new ConcatFunction(),
            new VectorDistanceFunction(),
            new SubtractVectorFunction(),
            new NormalizeVectorFunction(),
            new GetterFunction(),
            new DestroyUnitFunction(),
            new VectorLerpFunction(),

            //Loop
            new ALoop(),

            //Promise
            new AThen(),
            new APromise(),

            //Unit
            new GetWorldPositionFunction(),
            new ToScreenPositionFunction(),
            new SetWorldPositionFunction(),
            new GetUnitFunction(),
            new InstantiateUnitFunction(),
            new GetComponentFunction(),
            new EnableUnitFunction(),
            new DisableUnitFunction(),
            new SetParentUnitFunction(),
            new IsUnitPressedFunction(),
            new GetComponentInstanceFunction(),
            new CallFunction(),
            new IsFunctionDefinedFunction(),
            new GetUnitNameFunction(),
            new GetUnitTagNameFunction(),

            //Animation
            new StartAnimationFunction(),
            new StopAnimationFunction(),
            new IsAnimationPlayingFunction(),
            new HasCurrentAnimationFunction(),
            new GetCurrentAnimationFunction(),
            new IsAnimationEndedFunction(),

            //Component
            new SetFunction(),
            new GetFunction(),
            new GetInstanceFunction(),
            new SetInstanceFunction(),
            new GetUnitByComponentFunction(),
            new GetVarFunction(),
            new SetVarFunction(),

            //Audio
            new PlayAudioFunction(),
            new IsAudioPlayingFunction(),

            //Scene
            new LoadSceneFunction(),
            new LoadSceneIndexFunction(),

            //Object
            new GetValueFunction(),

            //Array
            new IsArrayEmptyFunction(),
            new ArrayPushFunction(),
            new ArraySizeFunction(),
            new ArrayIndexFunction(),

            //Time
            new GetTimeFunction(),
            new IsUpdateTimeFunction(),
            new GetDeltaTimeFunction(),

            //Physics
            new MoveXAxisFunction(),
            new MoveXYAxisFunction(),
            new ApplyForceFunction(),
            new GetVelocityXFunction(),
            new GetVelocityYFunction(),
            new IsGroundedFunction(),
            new ScaleMeshFunction(),
            new GetAllCollisionFunction(),
            new GetCollisionsFunction(),
            new BoxCastFunction(),

            //Transform
            new FlipScaleFunction(),
            new TranslateFunction(),
            new PhysicsTranslateFunction(),

            //Style
            new SetColorFunction(),

            //Structure
            new VectorFunction(),
            new ArrayFunction()
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
        return this.getInstances().filter(instance => instance.isMemberOfClass(className))
    }

    /**
     * @param {string} className
     */
    removeInstancesByClass(className){
        _.remove(this.getInstances(), (instance) => instance.isMemberOfClass(className))
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
                !(instance instanceof ALoop) &&
                !(instance instanceof AThen) &&
                !(instance instanceof AUnit) &&
                !(instance instanceof AAnimation) &&
                !(instance instanceof AFunctionInput) &&
                !(instance instanceof AFunctionOutput) &&
                !(instance instanceof AKeyCode) &&
                !(instance instanceof AVariable) &&
                !(instance instanceof AComponent)
            )
    }

    /**
     * @param {AScript} script
     * @return {AFunction[]}
     */
    getCustomFunctionInstances(script = null){
        return this.getOtherInstances().filter(instance =>
            instance.isGlobal() || instance.isPublic() ||
            (instance instanceof ACustomFunction && script && instance.isMemberOfClass(script.getName())))
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

    /**
     * @return {AVariable[]}
     */
    getVariableInstances(){
        return super.getInstances().filter(instance => instance instanceof AVariable)
    }

}