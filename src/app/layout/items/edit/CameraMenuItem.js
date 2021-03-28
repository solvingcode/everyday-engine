import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

class CameraMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'video',
            title: 'Add camera',
            stateCode: 'ACTION_ADD_CAMERA',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }
}

export default CameraMenuItem