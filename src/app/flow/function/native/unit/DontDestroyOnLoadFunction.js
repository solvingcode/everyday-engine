import ANativeFunction from '../ANativeFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class DontDestroyOnLoadFunction extends ANativeFunction{

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