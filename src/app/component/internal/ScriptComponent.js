import Component from '../Component.js'
import {TYPES} from '../../pobject/AttributeType.js'

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
    getExcludeFields() {
        return ['script']
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