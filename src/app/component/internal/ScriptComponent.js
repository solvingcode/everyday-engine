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
        return [
            {
                bind: 'assetId',
                label: 'Asset',
                type: Layout.form.TEXT,
                options: {
                    readonly: true
                }
            }
        ]
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
    getAssetId(){
        return this.getValue('assetId')
    }

    /**
     * @param {number} assetId
     */
    setAssetId(assetId){
        this.setValue('assetId', assetId)
        const vars = AssetHelper.getAssetScriptVars(assetId)
        vars.forEach(variable => {
            this.add(variable.getAttrName(), variable.getAttrType())
        })
    }
}