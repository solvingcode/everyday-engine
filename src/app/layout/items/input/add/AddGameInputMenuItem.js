import PanelMenuItem from '../../panel/PanelMenuItem.js'
import Layout from '../../../Layout.js'
import AddGameInputFormMenuItem from './AddGameInputFormMenuItem.js'
import AddGameInputSubmitMenuItem from './AddGameInputSubmitMenuItem.js'

export default class AddGameInputMenuItem  extends PanelMenuItem {
    constructor(parent, props = {}) {
        super({
            name: 'Add input',
            zone: parent ? parent.zone : Layout.zone.WINDOW,
            collapsed: true,
            ...props
        })
        this.parent = parent
        const formData = new AddGameInputForm()
        this.items = [
            new AddGameInputFormMenuItem(this, formData),
            new AddGameInputSubmitMenuItem(this, formData)
        ]
    }
}

export class AddGameInputForm {

    /**
     * @type {string}
     */
    name

    /**
     * @type {string}
     */
    key

    /**
     * @type {string}
     */
    value

    constructor() {
        this.name = ''
        this.key = ''
        this.value = ''
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

    /**
     * @param {string} key
     */
    setKey(key) {
        this.key = key
    }

    /**
     * @return {string}
     */
    getKey() {
        return this.key
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