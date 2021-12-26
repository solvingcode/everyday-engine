import ScriptHelper from '../../../utils/ScriptHelper.js'
import AClassComponent from './AClassComponent.js'

export default class AGetAttrClassComponent extends AClassComponent {

    /**
     * @param {string} name
     * @param {{type: number}} params
     */
    constructor(name, params = {}) {
        super(name, params)
        this.addOutput(params.type)
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
     * @override
     */
    initAttributes(params) {
    }
}