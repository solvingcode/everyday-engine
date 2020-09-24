define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const LayerEntityMenuItem = require('./LayerEntityMenuItem.js')
    const Layout = require('../../Layout.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')

    /**
     * Layer Menu Item
     * Menu responsible for managing entiies (z-index, ...)
     */
    class LayerMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Layer'
            })
            this.zone = Layout.zone.RIGHT
            this.type = Layout.type.LAYER
            this.items = []
        }
        run() {
            return false
        }
        isSelected() {
            return false
        }
        update() {
            const entities = EntityManager.get().getValidEntities()
            this.items = entities.map(entity => {
                const layerEntity = this.items.find(item => item.data.entity === entity)
                return layerEntity || new LayerEntityMenuItem(this, { entity })
            })
        }
    }

    return LayerMenuItem

})