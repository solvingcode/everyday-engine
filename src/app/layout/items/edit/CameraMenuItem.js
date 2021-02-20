import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

class CameraMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'video',
            title: 'Add camera',
            stateCode: 'DRAW_CAMERA',
            type: Layout.type.ICON,
            zone: Layout.zone.LEFT
        })
    }
}

export default CameraMenuItem