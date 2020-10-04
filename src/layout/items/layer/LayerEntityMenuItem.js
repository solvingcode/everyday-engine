define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')

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
         * @inheritdoc
         */
        run() {
            this.setActionState('SELECT_ENTITY', 'START')
            this.setDataState(this.data)
        }

        /**
         * @inheritdoc
         */
        isSelected() {
            return this.getEntity().selected
        }
        
        /**
         * @inheritdoc
         */
        isValid() {
            return EntityManager.get().entities.includes(this.getEntity()) &&
                this.parent.items.includes(this)
        }

        /**
         * Get entity attached to the layer
         */
        getEntity(){
            return this.data.entity
        }
    }

    return LayerEntityMenuItem

})