import SystemError from './SystemError.js'

export default class NotImplementedError extends SystemError {

    /**
     * @param {Object} parent
     * @param {Function} func
     */
    constructor(parent, func) {
        super(`${parent.constructor.name}.${func.name} must be implemented`)
    }

}