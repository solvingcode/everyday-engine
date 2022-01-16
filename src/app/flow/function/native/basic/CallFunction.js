import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import ScriptComponent from '../../../../component/internal/ScriptComponent.js'
import ScriptHelper from '../../../../utils/ScriptHelper.js'

export default class CallFunction extends AFunction {

    constructor() {
        super('CallFunction')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('unit', TYPES.UNIT, 0)
        this.addInput('function', TYPES.FUNCTION, 0)
        this.addOutput(TYPES.ANY)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const pUnit = this.getInputValue('unit')
        const func = this.getInputValue('function')
        const targetScriptComponent = pUnit.findComponentsByClass(ScriptComponent)
            .find(pScriptComponent => {
                return ScriptHelper.isHasFunction(world, pScriptComponent.getScript(), func)
            })
        if (targetScriptComponent) {
            const overrideFunctionName = `${targetScriptComponent.getName()}.${func.getFunctionName()}`
            const overrideFunction = world.getFunctionRegistry().getInstance(overrideFunctionName)
            const callFunction = overrideFunction || func
            callFunction.execute(functionRegistry, pUnit, targetScriptComponent, world, executionContext)
            this.setOutputValue(func.getOutputValue())
        }
    }
}