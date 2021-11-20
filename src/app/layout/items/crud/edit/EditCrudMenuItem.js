import PanelMenuItem from '../../panel/PanelMenuItem.js'
import Layout from '../../../Layout.js'
import EditCrudFormMenuItem from './EditCrudFormMenuItem.js'

export default class EditCrudMenuItem  extends PanelMenuItem {
    constructor(parent, props = {}, bindObject = null) {
        super({
            name: 'Edit',
            zone: parent ? parent.zone : Layout.zone.WINDOW,
            ...props
        }, parent)
        this.items = [
            new EditCrudFormMenuItem(this, bindObject)
        ]
    }
}