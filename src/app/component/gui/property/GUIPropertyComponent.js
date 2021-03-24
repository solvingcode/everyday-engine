import Component from '../../Component.js'
import Style from '../../../pobject/Style.js'

export default class GUIPropertyComponent extends Component{

    style
    selectable
    selected
    locked
    focused
    visible
    clonable
    rank

    constructor() {
        super('Edit Properties')
        this.style = new Style()
        this.selectable = true
        this.selected = false
        this.locked = false
        this.visible = true
        this.focused = false
        this.rank = 0
    }

    /**
     * @param {Style} style
     */
    setStyle(style) {
        this.style = style
    }

    /**
     * @return {Style}
     */
    getStyle(){
        return this.style
    }

    /**
     * @param {boolean} value
     */
    setSelected(value) {
        this.selected = value
    }

    /**
     * @return {boolean}
     */
    getSelected(){
        return this.selected
    }

    /**
     * @param {boolean} value
     */
    setFocused(value) {
        this.focused = value
    }

    /**
     * @return {boolean}
     */
    getFocused(){
        return this.focused
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
        return this.selectable
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
        this.visible = visible
    }

    /**
     * @return {boolean}
     */
    getVisible() {
        return this.visible
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
        this.locked = locked
    }

    /**
     * @return {boolean}
     */
    getLocked() {
        return this.locked
    }

    /**
     * @return {boolean}
     */
    isLocked() {
        return this.getLocked()
    }

    /**
     * @param {boolean} clonable
     */
    setClonable(clonable) {
        this.clonable = clonable
    }

    /**
     * @return {boolean}
     */
    getClonable() {
        return this.clonable
    }

    /**
     * @param {number} rank
     */
    setRank(rank){
        this.rank = rank
    }

    /**
     * @return {number}
     */
    getRank(){
        return this.rank
    }

    /**
     * @override
     */
    getFormFields() {
        return [

        ]
    }

}