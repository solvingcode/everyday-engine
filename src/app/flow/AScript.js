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
    delete(functionRegistry){
        this.getFunctions().forEach(func => func.delete(functionRegistry))
    }

    /**
     * @param {AScriptFunction} func
     */
    addFunction(func) {
        this.functions.push(func)
    }

    /**
     * @return {AScriptFunction}
     */
    getSelected(){
        return this.getFunctions().find(func => func.isSelected())
    }

    /**
     * @return {AScriptFunction}
     */
    getMainFunction(){
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