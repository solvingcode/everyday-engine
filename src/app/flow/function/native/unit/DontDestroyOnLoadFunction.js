import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class DontDestroyOnLoadFunction extends AFunction{

    constructor() {
        super('DontDestroyOnLoad')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
    }
}