import Component from '../../../Component.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class GUIAnchorComponent extends Component{

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
        this.add('offset', TYPES.NUMBER)
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

    /**
     * @return {number}
     */
    getOffset() {
        return this.getValue('offset')
    }

    /**
     * @param {number} offset
     */
    setOffset(offset) {
        this.setValue('offset', offset)
    }

}