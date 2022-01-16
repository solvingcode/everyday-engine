import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class GetUnitTagNameFunction extends AFunction{

    constructor() {
        super('GetUnitTagName')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addOutput(TYPES.STRING)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const target = this.getInputValue('target')
        const tagPreference = world.getPreference().getTag()
        const tagName = target.getTagId() ? tagPreference.find(target.getTagId()).getName() : ''
        this.setOutputValue(tagName)
    }
}