define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class LayerEntityMenuItem extends MenuItem {
        constructor(parent, data) {
            super({
                name: 'Layer'
            })
            this.parent = parent
            this.data = data
            this.zone = parent.zone
            this.type = Layout.type.LAYER_ENTITY
        }
        run() {
            this.setActionState('LAYER_ENTITY', 'START')
            this.setDataState(this.data)
        }
        isSelected() {
            return this.hasDataState(this.data)
        }
    }

    return LayerEntityMenuItem

})