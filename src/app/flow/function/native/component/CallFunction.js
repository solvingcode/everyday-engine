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
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('function', TYPES.FUNCTION, 0)
        this.addOutput(TYPES.ANY)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const target = this.getInputValue('target')
        const func = this.getInputValue('function')
        const targetScriptComponent = target.findComponentsByClass(ScriptComponent)
            .find(script => {
                const overrideFunctionName = `${script.getName()}.${func.getFunctionName()}`
                return ScriptHelper.isFunctionInstanceOf(world, overrideFunctionName, func.getClassName())
            })
        if (targetScriptComponent) {
            const overrideFunctionName = `${targetScriptComponent.getName()}.${func.getFunctionName()}`
            const overrideFunction = world.getFunctionRegistry().getInstance(overrideFunctionName) || func
            overrideFunction.execute(functionRegistry, target, targetScriptComponent, world, executionContext)
            this.setOutputValue(func.getOutputValue())
        }
    }
}