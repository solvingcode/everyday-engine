define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Detach the camera
     */
    class CameraDetachMenuItem extends MenuItem {
        constructor(parent, data) {
            super({
                name: 'Detach'
            })
            this.parent = parent
            this.data = data
            this.zone = parent.zone
            this.type = Layout.type.ACTION
        }
        run() {
            this.setActionState('DETACH_CAMERA', 'START')
        }
        isSelected() {
            return this.hasActionState('DETACH_CAMERA')
        }
    }

    return CameraDetachMenuItem

})