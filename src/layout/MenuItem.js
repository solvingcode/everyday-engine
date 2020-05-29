define(function () {

    class MenuItem {
        constructor(props) {
            this.props = props
        }
        setSelected(value) {
            this.props.selected = value
        }
        isSelected() {
            return this.props.selected
        }
        run(){
            throw 'run must be override'
        }
    }

    return MenuItem

})