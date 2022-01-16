import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

class CameraMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Camera',
            stateCode: 'ACTION_ADD_CAMERA',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}

export default CameraMenuItem