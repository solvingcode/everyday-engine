import PanelMenuItem from '../../panel/PanelMenuItem.js'
import Layout from '../../../Layout.js'
import AddMaskFormMenuItem from './AddMaskFormMenuItem.js'
import AddMaskSubmitMenuItem from './AddMaskSubmitMenuItem.js'

export default class AddMaskMenuItem  extends PanelMenuItem {
    constructor(parent, props = {}) {
        super({
            name: 'Add mask',
            zone: parent ? parent.zone : Layout.zone.WINDOW,
            collapsed: true,
            ...props
        })
        this.parent = parent
        const formData = new AddMaskForm()
        this.items = [
            new AddMaskFormMenuItem(this, formData),
            new AddMaskSubmitMenuItem(this, formData)
        ]
    }
}

export class AddMaskForm {

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