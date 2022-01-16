import ScriptHelper from '../../../utils/ScriptHelper.js'
import AClassComponent from './AClassComponent.js'
import DynamicAttributeHelper from '../../../utils/DynamicAttributeHelper.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'

export default class ASetAttrClassComponent extends AClassComponent {

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
        const extractName = ScriptHelper.extractComponentName(this.getName())
        const classComponent = world.getComponentRegistry().getInstance(extractName.component)
        const value = this.getInputValue('value')
        const component = unit.getComponent(classComponent.constructor)
        component.setValue(extractName.attribute, DynamicAttributeHelper
            .getValueByType(value, component.getType(extractName.attribute), world))
        if(classComponent.constructor === MeshComponent){
            component.setGenerated(false)
        }
    }

    /**
     * @override
     */
    initAttributes(params) {
        this.addInput('value', params.type)
    }
}