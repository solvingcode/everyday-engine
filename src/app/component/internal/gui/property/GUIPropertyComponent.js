import Component from '../../../Component.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class GUIPropertyComponent extends Component{

    constructor() {
        super('Edit Properties')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('selectable', TYPES.BOOLEAN, true)
        this.add('selected', TYPES.BOOLEAN, false)
        this.add('locked', TYPES.BOOLEAN, false)
        this.add('visible', TYPES.BOOLEAN, true)
        this.add('focused', TYPES.BOOLEAN, false)
        this.add('rank', TYPES.NUMBER, 0)
    }

    /**
     * @param {boolean} value
     */
    setSelected(value) {
        this.setValue('selected', value)
    }

    /**
     * @return {boolean}
     */
    getSelected(){
        return this.getValue('selected')
    }

    /**
     * @param {boolean} value
     */
    setFocused(value) {
        this.setValue('focused', value)
    }

    /**
     * @return {boolean}
     */
    getFocused(){
        return this.getValue('focused')
    }

    /**
     * @return {boolean}
     */
    isFocused(){
        return this.getFocused()
    }

    /**
     * @return {boolean}
     */
    isSelected(){
        return this.getSelected()
    }

    /**
     * @return {boolean}
     */
    getSelectable() {
        return this.getValue('selectable')
    }

    /**
     * @return {boolean}
     */
    isSelectable() {
        return this.getSelectable()
    }

    /**
     * @param {boolean} visible
     */
    setVisible(visible) {
        this.setValue('visible', visible)
    }

    /**
     * @return {boolean}
     */
    getVisible() {
        return this.getValue('visible')
    }

    /**
     * @return {boolean}
     */
    isVisible() {
        return this.getVisible()
    }

    /**
     * @param {boolean} locked
     */
    setLocked(locked) {
        this.setValue('locked', locked)
    }

    /**
     * @return {boolean}
     */
    getLocked() {
        return this.getValue('locked')
    }

    /**
     * @return {boolean}
     */
    isLocked() {
        return this.getLocked()
    }

    /**
     * @param {number} rank
     */
    setRank(rank){
        this.setValue('rank', rank)
    }

    /**
     * @return {number}
     */
    getRank(){
        return this.getValue('rank')
    }

    /**
     * @override
     */
    getFormFields() {
        return []
    }

    /**
     * @override
     */
    isHidden() {
        return true
    }
}