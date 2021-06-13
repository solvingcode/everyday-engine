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
                bind: 'assetId',
                label: 'Asset',
                type: Layout.form.TEXT,
                options: {
                    readonly: true
                }
            }
        ]

        attributes.forEach(attr => {
            if (attr.getAttrName() !== 'assetId') {
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
        this.add('assetId', TYPES.NUMBER)
    }

    /**
     * @return {number}
     */
    getAssetId() {
        return this.getValue('assetId')
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
     * @param {number} assetId
     */
    setAssetId(assetId) {
        this.setValue('assetId', assetId)
    }
}