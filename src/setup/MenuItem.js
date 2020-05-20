define(function () {

    class MenuItem {
        constructor(props) {
            this.props = props
        }
        setSelected() {
            this.props.selected = true
        }
        isSelected() {
            return this.props.selected
        }
    }

    return MenuItem

})