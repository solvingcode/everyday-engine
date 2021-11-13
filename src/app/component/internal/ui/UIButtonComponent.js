import Component from '../../Component.js'
import {TYPES} from '../../../pobject/AttributeType.js'

export default class UIButtonComponent extends Component {

    constructor() {
        super('UI Button')
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
        this.add('defaultColor', TYPES.COLOR)
        this.add('defaultColorOpacity', TYPES.RANGE, 1, [0, 1, 0.01])
        this.add('hoverColor', TYPES.COLOR)
        this.add('hoverColorOpacity', TYPES.RANGE, 1, [0, 1, 0.01])
        this.add('pressedColor', TYPES.COLOR)
        this.add('pressedColorOpacity', TYPES.RANGE, 1, [0, 1, 0.01])
        this.add('intractable', TYPES.BOOLEAN, false)
    }

    /**
     * @override
     */
    getExcludeFields() {
        return ['intractable']
    }

    /**
     * @return {string}
     */
    getDefaultColor() {
        return this.getValue('defaultColor')
    }

    /**
     * @param {string} color
     */
    setDefaultColor(color) {
        this.setValue('defaultColor', color)
    }

    /**
     * @return {number}
     */
    getDefaultColorOpacity() {
        return this.getValue('defaultColorOpacity')
    }

    /**
     * @param {number} opacity
     */
    setDefaultColorOpacity(opacity) {
        this.setValue('defaultColorOpacity', opacity)
    }

    /**
     * @return {string}
     */
    getHoverColor() {
        return this.getValue('hoverColor')
    }

    /**
     * @param {string} color
     */
    setHoverColor(color) {
        this.setValue('hoverColor', color)
    }

    /**
     * @return {number}
     */
    getHoverColorOpacity() {
        return this.getValue('hoverColorOpacity')
    }

    /**
     * @param {number} opacity
     */
    setHoverColorOpacity(opacity) {
        this.setValue('hoverColorOpacity', opacity)
    }

    /**
     * @return {string}
     */
    getPressedColor() {
        return this.getValue('pressedColor')
    }

    /**
     * @param {string} color
     */
    setPressedColor(color) {
        this.setValue('pressedColor', color)
    }

    /**
     * @return {number}
     */
    getPressedColorOpacity() {
        return this.getValue('pressedColorOpacity')
    }

    /**
     * @param {number} opacity
     */
    setPressedColorOpacity(opacity) {
        this.setValue('pressedColorOpacity', opacity)
    }

    /**
     * @return {boolean}
     */
    getIntractable() {
        return this.getValue('intractable')
    }

    /**
     * @param {boolean} intractable
     */
    setIntractable(intractable) {
        this.setValue('intractable', intractable)
    }

}