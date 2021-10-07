import AFunction from './AFunction.js'
import SystemError from '../../exception/type/SystemError.js'

export default class AAsyncFunction extends AFunction{

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        this.asyncExecute(functionRegistry, unit, scriptComponent, world, executionContext)
    }

    /**
     * @abstract
     * @param {FunctionRegistry} functionRegistry
     * @param {Unit} unit
     * @param {ScriptComponent} scriptComponent
     * @param {World} world
     * @param {{camera: Camera, lights: Unit[], deltaTime: number, storage: Storage}} executionContext
     * @return {void}
     */
    asyncExecute(functionRegistry, unit, scriptComponent, world, executionContext){
        throw new SystemError(`${this.constructor.name}.asyncExecute must be implemented`)
    }

    /**
     * @override
     */
    initAttributes() {
        super.initAttributes()
    }
}