import Component from '../../../Component.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class GUISelectorComponent extends Component{

    /**
     * @override
     */
    getFormFields() {
        return []
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('unitId', TYPES.NUMBER)
    }

    /**
     * @return {number}
     */
    getUnitId() {
        return this.getValue('unitId')
    }

    /**
     * @param {number} unitId
     */
    setUnitId(unitId) {
        this.setValue('unitId', unitId)
    }

}