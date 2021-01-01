define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const LayerEntityMenuItem = require('./LayerEntityMenuItem.js')
    const Layout = require('../../Layout.js')
    const World = require('../../../world/World.js')

    /**
     * Layer Menu Item
     * Menu responsible for managing entities (z-index, ...)
     */
    class LayerMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Layer',
                stateCode: '',
                type: Layout.type.PANEL,
                zone: Layout.zone.RIGHT
            })
            this.items = []
        }

        /**
         * @override
         */
        update() {
            const entities = World.get().getEntityManager().getValidBodyEntities().reverse()
            this.items = entities.map((entity, index) => {
                const layerEntity = this.items[index]
                if (layerEntity && layerEntity.data.entity !== entity) {
                    layerEntity.data.entity = entity
                }
                return layerEntity || new LayerEntityMenuItem(this, { entity })
            })
        }
    }

    return LayerMenuItem

})