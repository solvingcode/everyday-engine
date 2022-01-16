import Layout from '../../Layout.js'
import TextMenuItem from './TextMenuItem.js'

export default class TextInstantMenuItem extends TextMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Object} props
     * @param {any} value The default value
     * @param {Function} event The event binded to the field
     */
    constructor(parent, props, value, event) {
        super(parent, props, value, event)
        this.field = Layout.form.TEXT_INSTANT
    }
}
