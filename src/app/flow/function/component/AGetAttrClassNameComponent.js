import ScriptHelper from '../../../utils/ScriptHelper.js'
import AClassNameComponent from './AClassNameComponent.js'
import {TYPES} from '../../../pobject/AttributeType.js'
import ClientError from '../../../exception/type/ClientError.js'

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
        const target = this.getInputValue('target')
        const component = ScriptHelper.findComponent(world, target, extractName.component, this.getName())
        if (!component) {
            throw new ClientError(`Variable "${this.getName()}" not defined`)
        }
        this.setOutputValue(component.getValue(extractName.attribute))
    }

    /**
     * @override
     */
    initAttributes(params) {
        this.addInput('target', TYPES.UNIT)
    }
}