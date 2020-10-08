define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Attach the selected entity to the camera
     */
    class CameraAttachMenuItem extends MenuItem {
        constructor(parent, data) {
            super({
                name: 'Attach'
            })
            this.parent = parent
            this.data = data
            this.zone = parent.zone
            this.type = Layout.type.ACTION
        }
        run() {
            this.setActionState('ATTACH_CAMERA', 'START')
        }
        isSelected() {
            return this.hasActionState('ATTACH_CAMERA')
        }
    }

    return CameraAttachMenuItem

})