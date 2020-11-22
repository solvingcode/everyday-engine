define(function (require) {

    const StateManager = require('../state/StateManager.js')
    const Maths = require('../utils/Maths.js')

    /**
     * Define an item in the menu
     * @abstract
     *
     * @property {MenuItem|Menu} parent
     * @property {{items: MenuItem[]}} items
     * @property {MenuItem} element
     * @property {string} stateCode
     */
    class MenuItem {
        constructor(props) {
            this.props = props
            if(props.stateCode === undefined){
                throw new TypeError('State code for MenuItem is required!')
            }
            if(props.zone === undefined){
                throw new TypeError('Zone for MenuItem is required!')
            }
            if(props.type === undefined){
                throw new TypeError('Type for MenuItem is required!')
            }
            this.stateManager = StateManager.get()
            this.zone = props.zone
            this.type = props.type
            this.data = {}
            this.menu = null
            this.id = Maths.generateId()
            this.stateCode = props.stateCode
        }

        /**
         * Define if the menu is selected
         * @return {boolean}
         */
        isSelected() {
            return this.stateCode && this.hasState(this.stateCode, this.id)
        }

        /**
         * Run the action when the item is trigerred
         */
        run() {
            this.stateCode && this.startState(this.stateCode, this.id)
        }

        /**
         * Update the items for the menu
         */
        update() {
            this.items && this.items.forEach(item => item.isValid() && item.update())
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
         */
        stop() {
            this.stopState(this.stateCode)
        }

        /**
         * Start an action by type and data (state)
         * @param {string} type
         * @param {number} id
         * @param {Object} data
         */
        startState(type, id, data = {}){
            this.stateManager.startState(type, id, data)
        }

        /**
         * Stop an action by type (state)
         * @param {string} type
         */
        stopState(type){
            this.stateManager.stopState(type)
        }

        /**
         * Is state has action of given type/id
         * @param {string} type
         * @param {number} id
         * @return {boolean}
         */
        hasState(type, id){
            return this.stateManager.hasState(type, id)
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