define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const CameraEntityMenuItem = require('./CameraEntityMenuItem.js')
    const CameraAttachMenuItem = require('./CameraAttachMenuItem.js')
    const CameraDetachMenuItem = require('./CameraDetachMenuItem.js')
    const Layout = require('../../Layout.js')
    const World = require('../../../world/World.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')

    /**
     * Layer Menu Item
     * Menu responsible for managing entiies (z-index, ...)
     */
    class CameraMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Camera'
            })
            this.zone = Layout.zone.RIGHT
            this.type = Layout.type.LAYER
            this.items = [
                new CameraAttachMenuItem(this),
                new CameraDetachMenuItem(this)
            ]
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
            const camera = World.get().getCamera()
            const cameraEntity = this.items[2]
            const entity = camera.getEntity(EntityManager.get())
            if (!cameraEntity && entity) {
                this.items[2] = new CameraEntityMenuItem(this, { camera })
            } else if (cameraEntity && !entity) {
                this.items.splice(2, 1)
            }
        }
    }

    return CameraMenuItem

})