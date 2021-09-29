import PanelMenuItem from '../../panel/PanelMenuItem.js'
import Layout from '../../../Layout.js'
import EditMaskFormMenuItem from './EditMaskFormMenuItem.js'

export default class EditMaskMenuItem  extends PanelMenuItem {
    constructor(parent, props = {}, bindObject = null) {
        super({
            name: 'Edit mask',
            zone: parent ? parent.zone : Layout.zone.WINDOW,
            ...props
        })
        this.parent = parent
        this.items = [
            new EditMaskFormMenuItem(this, bindObject)
        ]
    }
}