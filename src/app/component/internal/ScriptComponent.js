import Component from '../Component.js'
import {TYPES} from '../../pobject/AttributeType.js'
import DynamicAttributeHelper from '../../utils/DynamicAttributeHelper.js'
import World from '../../world/World.js'
import UnitSelector from '../../selector/UnitSelector.js'

export default class ScriptComponent extends Component {

    constructor() {
        super('Script')
    }

    /**
     * @override
     */
    isUnique() {
        return false
    }

    /**
     * @override
     */
    getFormFields() {
        const attributes = this.getAttributes()
        const fields = []

        attributes.forEach(attr => {
            if (attr.getAttrName() !== 'script') {
                fields.push(DynamicAttributeHelper.getFormFields(World.get(), UnitSelector.get(), attr))
            }
        })

        return fields
    }

    /**
     * @param {DynamicAttribute[]} vars
     */
    setVarsAttributes(vars) {
        vars.forEach(variable => {
            if (!this.hasAttribute(variable.getAttrName())) {
                this.add(variable.getAttrName(), variable.getAttrType(), variable.getAttrValue())
            }
        })
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('script', TYPES.STRING)
    }

    /**
     * @return {string}
     */
    getScript() {
        return this.getValue('script')
    }

    /**
     * @param {string} script
     */
    setScript(script) {
        this.setValue('script', script)
    }

    /**
     * @override
     */
    getValue(name) {
        return super.getValue(name)
    }

    /**
     * @override
     */
    setValue(name, value) {
        return super.setValue(name, value)
    }

    /**
     * @override
     */
    getType(name) {
        return super.getType(name)
    }
}