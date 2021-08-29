import AScriptData, {STATUS} from '../project/data/AScriptData.js'
import SystemError from '../exception/type/SystemError.js'

/**
 * @abstract
 */
export default class AScript extends AScriptData {

    compile() {
        if (this.doCompile()) {
            this.setStatus(STATUS.COMPILED)
        } else {
            this.setStatus(STATUS.ERROR)
        }
    }

    reset() {
        this.setStatus(STATUS.NEW)
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
     * @return {boolean}
     */
    doCompile() {
        throw new SystemError(`${this.constructor.name}.doCompile must be implemented`)
    }

}