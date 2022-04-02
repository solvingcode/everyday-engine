import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class GetActiveCameraFunction extends ANativeFunction {

    constructor() {
        super('GetActiveCamera')
    }

    /**
     * @override
     */
    initAttributes(params) {
        this.addOutput(TYPES.UNIT)
    }
}