import ScriptHelper from '../../../utils/ScriptHelper.js'
import DynamicAttributeHelper from '../../../utils/DynamicAttributeHelper.js'
import AClassNameComponent from './AClassNameComponent.js'
import {TYPES} from '../../../pobject/AttributeType.js'

export default class ASetAttrClassNameComponent extends AClassNameComponent {

    /**
     * @param {string} name
     * @param {{type: number}} params
     */
    constructor(name, params = {}) {
        super(name, params)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const extractName = ScriptHelper.extractFromPublicVar(this.getName())
        const target = this.getInputValue('target')
        const component = ScriptHelper.findComponent(world, target, extractName.component)
        const value = this.getInputValue('value')
        component.setValue(extractName.attribute, DynamicAttributeHelper
            .getValueByType(value, component.getType(extractName.attribute), world))
    }

    /**
     * @override
     */
    initAttributes(params) {
        this.addInput('target', TYPES.UNIT)
        this.addInput('value', params.type)
    }
}