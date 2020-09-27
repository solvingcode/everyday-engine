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

        /**
         * @inheritdoc
         */
        run() {
            return false
        }

        /**
         * @inheritdoc
         */
        isSelected() {
            return false
        }

        /**
         * @inheritdoc
         */
        update() {
            const entities = EntityManager.get().getBodyEntities().reverse()
            this.items = entities.filter(entity => entity.isValid()).map((entity, index) => {
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