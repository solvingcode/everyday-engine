define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class LayerActionMenuItem extends MenuItem {
        constructor(parent, action, name) {
            super({ name })
            this.parent = parent
            this.zone = parent.zone
            this.type = Layout.type.LAYER_ACTION
            this.action = action
        }

        /**
         * @inherit
         */
        run() {
            this.setActionState(`${this.action}_ENTITY`, 'START')
        }

        /**
         * @inherit
         */
        isSelected() {
            return false
        }
    }

    return LayerActionMenuItem

})