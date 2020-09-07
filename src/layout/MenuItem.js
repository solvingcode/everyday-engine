define(function (require) {

    const AppState = require('../core/AppState.js')
    const Layout = require('./Layout.js')

    class MenuItem {
        constructor(props) {
            this.props = props
            this.appState = AppState.get()
            this.zone = Layout.zone.LEFT
            this.type = Layout.type.DRAW
        }

        /**
         * Define if the menu is selected
         */
        isSelected(){
            throw new TypeError('Abstract "isSelected" method must be implemented')
        }

        /**
         * Run the action when the item is trigerred
         */
        run() {
            throw new TypeError('Abstract "run" method must be implemented')
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
            this.appState.setUniqStateByGroup('TO_DRAW', itemToDraw)
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
         * @param {String} typeAction
         */
        setActionState(type) {
            this.appState.setUniqStateByGroup('ACTION', type)
        }

        /**
         * Has action state
         * @param {String} typeAction
         */
        hasActionState(type) {
            return this.appState.hasState(`ACTION_${type}`)
        }

        /**
         * Has action state
         * @param {String} itemToDraw
         */
        hasDrawState(itemToDraw) {
            return this.appState.hasState(`TO_DRAW_${itemToDraw}`) ||
            this.appState.hasState(`DRAWING_${itemToDraw}`)
        }

        /**
         * Has action state
         * @param {String} event
         */
        hasSimulateState() {
            return this.appState.hasState(`SIMULATE_START`) ||
                this.appState.hasState(`SIMULATE_PROGRESS`)
        }

    }

    return MenuItem

})