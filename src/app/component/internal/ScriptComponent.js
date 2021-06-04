import Component from '../Component.js'
import {TYPES} from '../../pobject/AttributeType.js'
import AssetHelper from '../../utils/AssetHelper.js'
import Layout from '../../layout/Layout.js'

export default class ScriptComponent extends Component {

    /**
     * @param {Asset} asset
     */
    constructor(asset) {
        super('Script')
    }

    /**
     * @override
     */
    getFormFields() {
        const vars = AssetHelper.getAssetScriptVars(this.getAssetId())
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

        vars.forEach(variable => {
            if (!this.hasAttribute(variable.getAttrName())) {
                this.add(variable.getAttrName(), variable.getAttrType())
            }
            fields.push(
                {
                    bind: variable.getAttrName(),
                    label: variable.getAttrName(),
                    type: Layout.form.TEXT,
                    dynamic: true
                })
        })

        return fields
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