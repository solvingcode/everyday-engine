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
        run(){
            throw new TypeError('Abstract "run" method must be implemented')
        }
    }

    return MenuItem

})