define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')

    /**
     * Define a layer entity block
     * @property {{entity: EntityMotion}} data
     */
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

        /**
         * @inheritDoc
         */
        run() {
            this.setActionState('SELECT_ENTITY', 'START')
            this.setDataState(this.data)
        }

        /**
         * @inheritDoc
         */
        isSelected() {
            return this.getEntity().selected
        }
        
        /**
         * @inheritDoc
         */
        isValid() {
            return super.isValid() && EntityManager.get().entities.includes(this.getEntity()) &&
                this.parent.items.includes(this)
        }

        /**
         * Get entity attached to the layer
         * @return {Entity}
         */
        getEntity(){
            return this.data.entity
        }
    }

    return LayerEntityMenuItem

})