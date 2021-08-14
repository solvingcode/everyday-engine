import Component from '../../../Component.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class GUIColliderComponent extends Component{

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
        this.add('componentId', TYPES.NUMBER)
        this.add('unitId', TYPES.NUMBER)
    }

    /**
     * @return {number}
     */
    getComponentId() {
        return this.getValue('componentId')
    }

    /**
     * @param {number} componentId
     */
    setComponentId(componentId) {
        this.setValue('componentId', componentId)
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