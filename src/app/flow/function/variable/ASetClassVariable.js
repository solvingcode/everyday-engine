import AClassVariable from './AClassVariable.js'

export default class ASetClassVariable extends AClassVariable {

    /**
     * @param {string} name
     * @param {{type: number, value: *}} params
     */
    constructor(name, params = {}) {
        super(name, params)
    }

    /**
     * @override
     */
    initAttributes(params) {
        this.addInput('value', params.type)
    }
}