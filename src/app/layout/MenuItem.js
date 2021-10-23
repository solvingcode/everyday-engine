import StateManager from '../state/StateManager.js'
import Maths from '../utils/Maths.js'
import {MouseButton} from '../core/Mouse.js'

/**
 * Define an item in the menu
 * @abstract
 *
 * @property {MenuItem|Menu} parent
 * @property {MenuItem[]} items
 * @property {MenuItem} element
 * @property {string} stateCode
 * @property {string} zone
 * @property {string} type
 * @property {callback} value The default value
 * @property {callback} event The event bound to the field
 */
class MenuItem {
    constructor(props, parent) {
        this.props = props
        if (props.stateCode === undefined) {
            throw new TypeError('State code for MenuItem is required!')
        }
        if (props.zone === undefined) {
            throw new TypeError('Zone for MenuItem is required!')
        }
        if (props.type === undefined) {
            throw new TypeError('Type for MenuItem is required!')
        }
        this.stateManager = StateManager.get()
        this.zone = props.zone
        this.type = props.type
        this.data = {}
        this.menu = null
        this.id = props.id || Maths.generateId()
        this.index = props.index || Maths.generateId()
        this.stateCode = props.stateCode
        this.dragStateCode = props.dragStateCode
        this.dbClickStateCode = props.dbClickStateCode
        this.postStateCode = props.postStateCode
        this.skipStateCodes = props.skipStateCodes || []
        this.collapsed = props.collapsed || false
        this.draggable = props.draggable || false
        this.startDragging = false
        this.endDragging = false
        this.parent = parent
        this.sectionActive = false
        this.items = []
    }

    /**
     * @param {{bind: Object, list?: *[]}} data
     * @return {void}
     */
    setData(data) {
        throw new TypeError('MenuItem.setData must be implemented')
    }

    /**
     * @return {Object}
     */
    getDataBind() {
        return this.data
    }

    /**
     * Define if the menu is selected
     * @return {boolean}
     */
    isSelected() {
        return this.stateCode && this.hasState(this.stateCode, this.id)
    }

    /**
     * @return {boolean}
     */
    isSectionActive(){
        return this.sectionActive
    }

    /**
     * @param {boolean} active
     */
    setSectionActive(active){
        this.sectionActive = active
    }

    /**
     * @param {MenuItem} parent
     * @return {boolean}
     */
    isChildOf(parent){
        return this.parent === parent || (this.parent && this.parent.isChildOf(parent))
    }

    /**
     * @param {Window} window
     */
    isHandle(window){
        return window.mouse.isButtonClicked(MouseButton.LEFT)
    }

    /**
     * @return {boolean}
     */
    isDraggable(){
        return this.draggable
    }

    /**
     * @return {boolean}
     */
    isStartDragging(){
        return this.startDragging
    }

    /**
     * @param {boolean} value
     */
    setStartDragging(value){
        this.startDragging = value
    }

    /**
     * @return {boolean}
     */
    isEndDragging(){
        return this.endDragging
    }

    /**
     * @param {boolean} value
     */
    setEndDragging(value){
        this.endDragging = value
    }

    /**
     * @return {boolean}
     */
    isRightClick(){
        return false
    }

    /**
     * @return {boolean}
     */
    isSection(){
        return false
    }

    /**
     * @return {string|null}
     */
    getDragStateCode(){
        return this.dragStateCode
    }

    /**
     * @return {string|null}
     */
    getDbClickStateCode(){
        return this.dbClickStateCode
    }

    /**
     * @return {boolean}
     */
    isCollapsed() {
        return this.collapsed
    }

    /**
     * @return {boolean}
     */
    isEnabled() {
        return true
    }

    /**
     * @return {boolean}
     */
    isHidden(){
        return false
    }

    /**
     * @return {boolean}
     */
    isReadOnly(){
        return false
    }

    /**
     * @return {boolean}
     */
    isLocked(){
        return false
    }

    /**
     * @return {boolean}
     */
    isEditing(){
        return false
    }

    /**
     * @param {boolean} collapsed
     */
    setCollapsed(collapsed) {
        this.collapsed = collapsed
    }

    /**
     * Run the action when the item is triggered
     */
    run() {
        this.stateCode && this.startState()
        this.postStateCode && this.postState()
    }

    /**
     * Run the action when the item receive a dragged item
     * @param {*} data
     */
    drag(data) {
        this.dragStateCode && this.dragState(data)
    }

    /**
     * Run the action when the item receive a dragged item
     */
    dblClick() {
        this.dbClickStateCode && this.dblClickState()
    }

    /**
     * @const
     * Update the items for the menu
     */
    update() {
        this.items && this.items.forEach(item => item.isValid() && item.update())
        this.doUpdate()
    }

    doUpdate(){
    }

    /**
     * Is menu item valid
     * @return {boolean}
     */
    isValid() {
        return (!this.parent || this.parent.items.includes(this))
            && !this.stateManager.isRunning()
    }

    /**
     * Stop the action when the item is unselected
     * @param {string} sourceState the source state that trigger the stop
     */
    stop(sourceState = '') {
        this.stopState()
        if (sourceState && this.stateManager.isActionState(sourceState)) {
            if (this.stateManager.isDrawState(this.stateCode)) {
                this.startState()
            }
        }
    }

    /**
     * @return {boolean}
     */
    isAction(){
        return this.stateManager.isActionState(this.stateCode)
    }

    /**
     * Start an action by type and data (state)
     */
    startState() {
        this.stateManager.startState(this.stateCode, this.id, this.data)
    }

    /**
     * Start a post action by type and data (state)
     */
    postState() {
        this.stateManager.startState(this.postStateCode, this.id, this.data)
    }

    /**
     * Start a drag action by type and data (state)
     * @param {*} data
     */
    dragState(data) {
        this.stateManager.startState(this.dragStateCode, this.id, {start: data, end: this.getDataBind()})
    }

    /**
     * Start a double click action by type and data (state)
     */
    dblClickState() {
        this.stateManager.startState(this.dbClickStateCode, this.id, this.data)
    }

    /**
     * Stop an action by type (state)
     */
    stopState() {
        if(this.stateCode){
            this.stateManager.stopState(this.stateCode, this.id)
        }
    }

    /**
     * Is state has action of given type/id
     * @param {string} type
     * @param {number} id
     * @return {boolean}
     */
    hasState(type, id) {
        return this.stateManager.hasState(type, id)
    }

    /**
     * Get previous item
     * @return {MenuItem}
     */
    getPrevItem() {
        return this.menu.getPrevItem(this)
    }

    /**
     * @return {boolean}
     */
    isForm(){
        return false
    }

}

/**
 * The event to call
 * @callback callback
 */

export default MenuItem