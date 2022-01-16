import PanelMenuItem from '../../panel/PanelMenuItem.js'
import Layout from '../../../Layout.js'
import AddCrudFormMenuItem from './AddCrudFormMenuItem.js'
import AddCrudSubmitMenuItem from './AddCrudSubmitMenuItem.js'

export default class AddCrudMenuItem extends PanelMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {*} formData
     * @param {*} props
     */
    constructor(parent, props, formData) {
        super({
            name: 'Add',
            zone: parent ? parent.zone : Layout.zone.WINDOW,
            collapsed: true,
            ...props
        }, parent)
        this.items = [
            new AddCrudFormMenuItem(this, formData),
            new AddCrudSubmitMenuItem(this, formData)
        ]
    }
}