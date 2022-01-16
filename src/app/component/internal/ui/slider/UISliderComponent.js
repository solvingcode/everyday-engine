import Component from '../../../Component.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class UISliderComponent extends Component {

    constructor() {
        super('UI Slider')
    }

    /**
     * @override
     */
    isUnique() {
        return true
    }

    /**
     * @override
     */
    isRemovable() {
        return false
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('currentValue', TYPES.NUMBER, 0)
        this.add('minValue', TYPES.NUMBER, 0)
        this.add('maxValue', TYPES.NUMBER, 1)
    }

    /**
     * @return {number}
     */
    getCurrentValue() {
        return this.getValue('currentValue')
    }

    /**
     * @param {number} currentValue
     */
    setCurrentValue(currentValue) {
        this.setValue('currentValue', currentValue)
    }

    /**
     * @return {number}
     */
    getMinValue() {
        return this.getValue('minValue')
    }

    /**
     * @param {number} minValue
     */
    setMinValue(minValue) {
        this.setValue('minValue', minValue)
    }

    /**
     * @return {number}
     */
    getMaxValue() {
        return this.getValue('maxValue')
    }

    /**
     * @param {number} maxValue
     */
    setMaxValue(maxValue) {
        this.setValue('maxValue', maxValue)
    }

}