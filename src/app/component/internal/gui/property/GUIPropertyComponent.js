import Component from '../../../Component.js'
import Style from '../../../../pobject/Style.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class GUIPropertyComponent extends Component{

    constructor() {
        super('Edit Properties')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('style', TYPES.STYLE, new Style())
        this.add('selectable', TYPES.BOOLEAN, true)
        this.add('selected', TYPES.BOOLEAN, false)
        this.add('locked', TYPES.BOOLEAN, false)
        this.add('visible', TYPES.BOOLEAN, true)
        this.add('focused', TYPES.BOOLEAN, false)
        this.add('rank', TYPES.NUMBER, 0)

    }

    /**
     * @param {Style} style
     */
    setStyle(style) {
        this.set('style', style)
    }

    /**
     * @return {Style}
     */
    getStyle(){
        return this.get('style').getAttrValue()
    }

    /**
     * @param {boolean} value
     */
    setSelected(value) {
        this.set('selected', value)
    }

    /**
     * @return {boolean}
     */
    getSelected(){
        return this.get('selected').getAttrValue()
    }

    /**
     * @param {boolean} value
     */
    setFocused(value) {
        this.set('focused', value)
    }

    /**
     * @return {boolean}
     */
    getFocused(){
        return this.get('focused').getAttrValue()
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
        return this.get('selectable').getAttrValue()
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
        this.set('visible', visible)
    }

    /**
     * @return {boolean}
     */
    getVisible() {
        return this.get('visible').getAttrValue()
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
        this.set('locked', locked)
    }

    /**
     * @return {boolean}
     */
    getLocked() {
        return this.get('locked').getAttrValue()
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
        this.set('rank', rank)
    }

    /**
     * @return {number}
     */
    getRank(){
        return this.get('rank').getAttrValue()
    }

    /**
     * @override
     */
    getFormFields() {
        return []
    }
}