import AddScriptNodeSubmitMenuItem from './AddScriptNodeSubmitMenuItem.js'
import AddScriptNodeFormMenuItem from './AddScriptNodeFormMenuItem.js'
import PanelMenuItem from '../../../panel/PanelMenuItem.js'

export default class AddScriptNodeMenuItem  extends PanelMenuItem {
    constructor(parent) {
        super({
            name: 'Add node',
            zone: parent.zone
        })
        this.collapsed = true
        this.parent = parent
        const formData = new AddScriptNodeForm()
        this.items = [
            new AddScriptNodeFormMenuItem(this, formData),
            new AddScriptNodeSubmitMenuItem(this, formData)
        ]
    }
}

export class AddScriptNodeForm {

    /**
     * @type {string}
     */
    type

    /**
     * @type {string}
     */
    value

    constructor() {
        this.type = ''
        this.value = ''
    }

    /**
     * @param {string} type
     */
    setType(type) {
        this.type = type
    }

    /**
     * @return {string}
     */
    getType() {
        return this.type
    }

    /**
     * @param {string} value
     */
    setValue(value) {
        this.value = value
    }

    /**
     * @return {string}
     */
    getValue() {
        return this.value
    }

}