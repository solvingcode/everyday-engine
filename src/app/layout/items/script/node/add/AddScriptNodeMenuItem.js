import Layout from '../../../../Layout.js'
import MenuItem from '../../../../MenuItem.js'
import AddScriptNodeSubmitMenuItem from './AddScriptNodeSubmitMenuItem.js'
import AddScriptNodeFormMenuItem from './AddScriptNodeFormMenuItem.js'

export default class AddScriptNodeMenuItem  extends MenuItem {
    constructor(parent) {
        super({
            name: 'Nodes',
            stateCode: '',
            type: Layout.type.PANEL,
            zone: parent.zone
        })
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