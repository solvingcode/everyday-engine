import {CONSTANTS} from '../operation/StackRegister.js'

export default class StackRegistryHelper {

    /**
     * @param {string|number} name
     * @return {boolean}
     */
    static isMemory(name) {
        return !!`${name}`.match(/^\[MEM].*/)
    }

    /**
     * @param {string|number} name
     * @return {boolean}
     */
    static isResult(name) {
        return !!`${name}`.match(new RegExp(`^${CONSTANTS.RESULT}.*`))
    }

    /**
     * @param {string|number} name
     * @return {boolean}
     */
    static isCustomResult(name) {
        return !!`${name}`.match(new RegExp(`^${CONSTANTS.RESULT}_.+`))
    }

    /**
     * @param {string|number} name
     * @return {string}
     */
    static getCustomResult(name) {
        const match = name.match(new RegExp(`^${CONSTANTS.RESULT}_(.+)`))
        if (match) {
            return match[1]
        }
    }

    /**
     * @param {string} functionName
     * @param {string} name
     * @return {string}
     */
    static getScopeName(functionName, name) {
        if (name === CONSTANTS.RESULT || name === CONSTANTS.JUMP || name === CONSTANTS.SIGNAL || StackRegistryHelper.isMemory(name)) {
            return name
        }
        return functionName ? `${functionName}.${name}` : name
    }

    /**
     * @param {string} variable
     */
    static getVarName(variable) {
        return variable.replace('[MEM]', '')
    }
}