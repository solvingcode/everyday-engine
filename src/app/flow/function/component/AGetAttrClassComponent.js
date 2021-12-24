import ScriptHelper from '../../../utils/ScriptHelper.js'
import AClassComponent from './AClassComponent.js'

export default class AGetAttrClassComponent extends AClassComponent {

    /**
     * @param {string} name
     * @param {{component: Component, attribute: string}} params
     */
    constructor(name, params = {}) {
        super(name, params)
        const attribute = this.getComponentAttribute(params)
        this.addOutput(attribute.getAttrType(), attribute.getAttrValue())
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const extractName = ScriptHelper.extractComponentName(this.getName())
        const classComponent = world.getComponentRegistry().getInstance(extractName.component)
        const component = unit.getComponent(classComponent.constructor)
        this.setOutputValue(component.getValue(extractName.attribute))
    }

    /**
     * @param {{component: Component, attribute: string}} params
     * @return {DynamicAttribute}
     */
    getComponentAttribute(params){
        const {component, attribute} = params
        return component.get(attribute)
    }

    /**
     * @override
     */
    initAttributes(params) {
    }
}