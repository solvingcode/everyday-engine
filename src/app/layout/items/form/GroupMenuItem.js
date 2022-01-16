import Layout from '../../Layout.js'
import InputMenuItem from './InputMenuItem.js'

export default class GroupMenuItem extends InputMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Object} props
     * @param {any} value The default value
     * @param {Function} event The event binded to the field
     */
    constructor(parent, props, value, event) {
        super(parent, {...props, stateCode: ''}, value, event)
        this.field = Layout.form.GROUP
    }
}

