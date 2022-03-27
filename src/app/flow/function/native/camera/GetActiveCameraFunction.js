import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetActiveCameraFunction extends AFunction {

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