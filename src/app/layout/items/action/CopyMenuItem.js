import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class CopyMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Copy (Ctrl+C)',
            stateCode: 'ACTION_COPY',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}