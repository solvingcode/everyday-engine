import PanelMenuItem from '../../panel/PanelMenuItem.js'
import Layout from '../../../Layout.js'
import EditTagFormMenuItem from './EditTagFormMenuItem.js'

export default class EditTagMenuItem  extends PanelMenuItem {
    constructor(parent, props = {}, bindObject = null) {
        super({
            name: 'Edit tag',
            zone: parent ? parent.zone : Layout.zone.WINDOW,
            ...props
        })
        this.parent = parent
        this.items = [
            new EditTagFormMenuItem(this, bindObject)
        ]
    }
}