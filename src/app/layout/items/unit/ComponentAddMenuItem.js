import PanelMenuItem from '../panel/PanelMenuItem.js'
import ComponentSubmitFormMenuItem from './ComponentSubmitFormMenuItem.js'
import ComponentAddFormMenuItem from './ComponentAddFormMenuItem.js'

export default class ComponentAddMenuItem  extends PanelMenuItem {
    constructor(parent) {
        super({
            name: 'Attach new component',
            zone: parent.zone
        }, parent)
        this.collapsed = true
        const formData = new AddComponentForm()
        this.items = [
            new ComponentAddFormMenuItem(this, formData),
            new ComponentSubmitFormMenuItem(this, formData)
        ]
    }
}

export class AddComponentForm {

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