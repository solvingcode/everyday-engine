define(function (require) {

    const AppState = require('../state/AppState.js')
    const StateManager = require('../state/StateManager.js')
    const Layout = require('./Layout.js')
    const Maths = require('../utils/Maths.js')

    /**
     * Define an item in the menu
     * @abstract
     *
     * @property {MenuItem|Menu} parent
     * @property {{items: MenuItem[]}} items
     * @property {MenuItem} element
     */
    class MenuItem {
        constructor(props) {
            this.props = props
            this.appState = AppState.get()
            this.stateManager = StateManager.get()
            this.zone = Layout.zone.LEFT
            this.type = Layout.type.DRAW
            this.data = {}
            this.menu = null
            this.id = Maths.generateId()
        }

        /**
         * Define if the menu is selected
         * @return {boolean}
         */
        isSelected() {
            throw new TypeError('Abstract "isSelected" method must be implemented')
        }

        /**
         * Run the action when the item is trigerred
         */
        run() {
            throw new TypeError('Abstract "run" method must be implemented')
        }

        /**
         * Update the items for the menu
         */
        update() { }

        /**
         * Is menu item valid
         * @return {boolean}
         */
        isValid() {
            return (!this.parent || this.parent.items.includes(this))
                && !this.appState.hasState('SIMULATE_PROGRESS')
                && !this.appState.hasState('SIMULATE_STOP')
        }

        /**
         * Stop the action when the item is unselected
         */
        stop() { }

        /**
         * Add draw state
         * @param {String} itemToDraw 
         */
        setDrawState(itemToDraw) {
            this.stateManager.startDraw(itemToDraw)
        }

        /**
         * Add simulate state
         * @param {String} event 
         */
        setSimulateState(event) {
            this.appState.setUniqStateByGroup('SIMULATE', event)
        }

        /**
         * Add action state
         * @param {String} type
         * @param {String} event
         */
        setActionState(type, event) {
            this.appState.setState(`ACTION_${type}_${event}`)
        }

        /**
         * Start an action by type and data (state)
         * @param {string} type
         * @param {number} id
         * @param {Object} data
         */
        startAction(type, id, data){
            this.stateManager.startAction(type, id, data)
        }

        /**
         * Stop an action by type (state)
         * @param {string} type
         */
        stopAction(type){
            this.stateManager.stopAction(type)
        }

        /**
         * Is state has action of given type/id
         * @param {string} type
         * @param {number} id
         * @return {boolean}
         */
        hasAction(type, id){
            return this.stateManager.hasAction(type, id)
        }

        /**
         * Set data state
         * @param {Object} data
         */
        setDataState(data) {
            this.appState.setData(data)
        }

        /**
         * Get data state
         */
        getDataState() {
            return this.appState.data
        }

        /**
         * Has action state
         * @param {String} type
         * @return {boolean}
         */
        hasActionState(type) {
            return this.appState.hasState(`ACTION_${type}_START`) ||
                this.appState.hasState(`ACTION_${type}_STOP`)
        }

        /**
         * Has data state
         * @param {Object} data
         * @return {boolean}
         */
        hasDataState(data) {
            return this.appState.hasData(data)
        }

        /**
         * Has action state
         * @param {String} itemToDraw
         * @return {boolean}
         */
        hasDrawState(itemToDraw) {
            return this.appState.hasState(`TO_DRAW_${itemToDraw}`) ||
                this.appState.hasState(`DRAWING_${itemToDraw}`)
        }

        /**
         * Has action state
         * @return {boolean}
         */
        hasSimulateState() {
            return this.appState.hasState(`SIMULATE_START`) ||
                this.appState.hasState(`SIMULATE_PROGRESS`)
        }

        /**
         * Get previous item
         * @return {MenuItem}
         */
        getPrevItem() {
            return this.menu.getPrevItem(this)
        }

    }

    return MenuItem

})