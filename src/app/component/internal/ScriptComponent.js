import Component from '../Component.js'
import {TYPES} from '../../pobject/AttributeType.js'
import Layout from '../../layout/Layout.js'

export default class ScriptComponent extends Component {

    constructor() {
        super('Script')
    }

    /**
     * @override
     */
    getFormFields() {
        const attributes = this.getAttributes()
        const fields = [
            {
                bind: 'script',
                label: 'Script',
                type: Layout.form.TEXT,
                options: {
                    readonly: true
                }
            }
        ]

        attributes.forEach(attr => {
            if (attr.getAttrName() !== 'script') {
                fields.push(
                    {
                        bind: attr.getAttrName(),
                        label: attr.getAttrName(),
                        type: Layout.form.TEXT,
                        dynamic: true
                    })
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
}