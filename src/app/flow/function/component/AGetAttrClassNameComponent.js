import ScriptHelper from '../../../utils/ScriptHelper.js'
import AClassNameComponent from './AClassNameComponent.js'

export default class AGetAttrClassNameComponent extends AClassNameComponent {

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
        const extractName = ScriptHelper.extractFromPublicVar(this.getName())
        const component = unit.findComponentByName(extractName.component)
        this.setOutputValue(component.getValue(extractName.attribute))
    }

    /**
     * @override
     */
    initAttributes(params) {
    }
}