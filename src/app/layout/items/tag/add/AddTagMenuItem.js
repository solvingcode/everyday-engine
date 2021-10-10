import PanelMenuItem from '../../panel/PanelMenuItem.js'
import Layout from '../../../Layout.js'
import AddTagFormMenuItem from './AddTagFormMenuItem.js'
import AddTagSubmitMenuItem from './AddTagSubmitMenuItem.js'

export default class AddTagMenuItem  extends PanelMenuItem {
    constructor(parent, props = {}) {
        super({
            name: 'Add tag',
            zone: parent ? parent.zone : Layout.zone.WINDOW,
            collapsed: true,
            ...props
        })
        this.parent = parent
        const formData = new AddTagForm()
        this.items = [
            new AddTagFormMenuItem(this, formData),
            new AddTagSubmitMenuItem(this, formData)
        ]
    }
}

export class AddTagForm {

    /**
     * @type {string}
     */
    name

    constructor() {
        this.name = ''
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

}