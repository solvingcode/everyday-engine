define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class LayerActionMenuItem extends MenuItem {
        constructor(parent, action, data) {
            super({
                name: 'Layer'
            })
            this.parent = parent
            this.data = data
            this.zone = parent.zone
            this.type = Layout.type.LAYER_ACTION
            this.action = action
        }
        run() {
            this.setActionState(`ACTION_${this.action}`, 'START')
            this.setDataState(this.data)
        }
        isSelected() {
            return false
        }
    }

    return LayerActionMenuItem

})