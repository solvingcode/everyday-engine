import {TYPES} from '../../../../pobject/AttributeType.js'
import StorageHelper from '../../../../utils/StorageHelper.js'
import AAsyncFunction from '../../AAsyncFunction.js'

export default class InstantiateUnitFunction extends AAsyncFunction{

    constructor() {
        super('InstantiateUnit')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT_INSTANT, 0)
        this.addOutput(TYPES.PROMISE)
    }

    /**
     * @override
     */
    asyncExecute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const target = this.getInputValue('target')
        this.setOutputValue(StorageHelper.loadAssetUnit(target, executionContext.storage).then(units => units[0]))
    }
}