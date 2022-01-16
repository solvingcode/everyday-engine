import PanelMenuItem from '../../panel/PanelMenuItem.js'
import Layout from '../../../Layout.js'
import EditGameInputFormMenuItem from './EditGameInputFormMenuItem.js'

export default class EditGameInputMenuItem  extends PanelMenuItem {
    constructor(parent, props = {}, bindObject = null) {
        super({
            name: 'Edit game input',
            zone: parent ? parent.zone : Layout.zone.WINDOW,
            ...props
        })
        this.parent = parent
        this.items = [
            new EditGameInputFormMenuItem(this, bindObject)
        ]
    }
}