import AScriptData, {STATUS} from '../project/data/AScriptData.js'
import SystemError from '../exception/type/SystemError.js'

/**
 * @abstract
 */
export default class AScript extends AScriptData {

    /**
     * @param {World} world
     */
    compile(world) {
        if (this.doCompile(world)) {
            this.setStatus(STATUS.COMPILED)
        } else {
            this.setStatus(STATUS.ERROR)
        }
    }

    reset() {
        this.setStatus(STATUS.NEW)
    }

    /**
     * @param {FunctionRegistry} functionRegistry
     */
    delete(functionRegistry) {
        this.getFunctions().forEach(func => func.delete(functionRegistry))
    }

    /**
     * @param {FunctionRegistry} functionRegistry
     * @param {AScriptFunction} func
     */
    deleteFunction(functionRegistry, func) {
        const index = this.functions.findIndex(pFunc => pFunc === func)
        if (index >= 0) {
            this.functions.splice(index, 1)
            func.delete(functionRegistry)
        }
    }

    /**
     * @param {VariableScript} variable
     */
    deleteVariable(variable) {
        const index = this.variables.findIndex(pVariable => pVariable === variable)
        if (index >= 0) {
            this.variables.splice(index, 1)
        }
    }

    /**
     * @param {AScriptFunction} func
     */
    addFunction(func) {
        this.functions.push(func)
    }

    /**
     * @param {string} functionName
     * @return {AScriptFunction}
     */
    getFunction(functionName) {
        return this.functions.find(func => func.getName() === functionName)
    }

    /**
     * @return {AScriptFunction}
     */
    getSelected() {
        return this.getFunctions().find(func => func.isSelected())
    }

    /**
     * @return {AScriptFunction}
     */
    getMainFunction() {
        return this.getFunctions().find(func => func.isMain())
    }

    /**
     * @abstract
     * @private
     * @param {World} world
     * @return {boolean}
     */
    doCompile(world) {
        throw new SystemError(`${this.constructor.name}.doCompile must be implemented`)
    }

}