define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')

    /**
     * CameraEntityMenuItem class
     * Show/Manage the attached entity to the camera
     */
    class CameraEntityMenuItem extends MenuItem {
        constructor(parent, data) {
            super({
                name: 'Camera'
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
            this.setDataState({ entity: this.data.camera.getEntity(EntityManager.get()) })
        }

        /**
         * @inheritdoc
         */
        isSelected() {
            return this.getEntity() && this.getEntity().selected
        }

        /**
         * Get entity attached to the camera
         */
        getEntity() {
            return this.data.camera.getEntity(EntityManager.get())
        }
    }

    return CameraEntityMenuItem

})