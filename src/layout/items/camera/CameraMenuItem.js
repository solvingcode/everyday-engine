define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const CameraEntityMenuItem = require('./CameraEntityMenuItem.js')
    const CameraAttachMenuItem = require('./CameraAttachMenuItem.js')
    const CameraDetachMenuItem = require('./CameraDetachMenuItem.js')
    const Layout = require('../../Layout.js')
    const World = require('../../../world/World.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')

    /**
     * Camera Menu Item
     * Menu responsible for managing cameras (attach, detach, ...)
     */
    class CameraMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Camera'
            })
            this.zone = Layout.zone.RIGHT
            this.type = Layout.type.PANEL
            this.items = [
                new CameraAttachMenuItem(this),
                new CameraDetachMenuItem(this)
            ]
        }

        /**
         * @inherit
         */
        run() {
            return false
        }

        /**
         * @inherit
         */
        isSelected() {
            return false
        }

        /**
         * @inherit
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