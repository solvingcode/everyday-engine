define(function (require) {

    const AppState = require('../core/AppState.js')

    class MenuItem {
        constructor(props) {
            this.props = props
            this.appState = AppState.get()
        }

        setSelected(value) {
            this.props.selected = value
        }

        isSelected() {
            return this.props.selected
        }

        /**
         * Run the action when the item is trigerred
         */
        run() {
            throw new TypeError('Abstract "run" method must be implemented')
        }

        /**
         * Add draw state
         * @param {String} itemToDraw 
         */
        setDrawState(itemToDraw) {
            const stateGroup = 'TO_DRAW'
            this.appState.removeState(stateGroup, false)
            this.appState.addState(`${stateGroup}_${itemToDraw}`)
        }
    }

    return MenuItem

})