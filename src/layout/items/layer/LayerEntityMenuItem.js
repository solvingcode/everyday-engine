define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')
    const World = require('../../../world/World.js')

    /**
     * Define a layer entity block
     * @property {{entity: EntityMotion}} data
     */
    class LayerEntityMenuItem extends MenuItem {
        constructor(parent, data) {
            super({
                name: 'Layer',
                stateCode: 'ACTION_SELECT_ENTITY',
                type: Layout.type.LAYER_ENTITY,
                zone: parent.zone
            })
            this.parent = parent
            this.data = data
        }

        /**
         * @override
         */
        isSelected() {
            return this.getEntity().selected
        }
        
        /**
         * @override
         */
        isValid() {
            return super.isValid() && World.get().getEntityManager().entities.includes(this.getEntity())
        }

        /**
         * Get entity attached to the layer
         * @return {EntityMotion}
         */
        getEntity(){
            return this.data.entity
        }
    }

    return LayerEntityMenuItem

})