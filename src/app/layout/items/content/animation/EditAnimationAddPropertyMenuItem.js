import PanelMenuItem from '../../panel/PanelMenuItem.js'
import Layout from '../../../Layout.js'

export default class EditAnimationAddPropertyMenuItem extends PanelMenuItem {
    constructor(parent, props = {}, bindObject = null) {
        super({
            name: 'Add Property',
            zone: Layout.zone.WINDOW,
            ...props
        })
        this.parent = parent
        this.items = []
    }
}