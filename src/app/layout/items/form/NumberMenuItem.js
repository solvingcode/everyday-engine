import Layout from '../../Layout.js'
import InputMenuItem from './InputMenuItem.js'

export default class NumberMenuItem extends InputMenuItem {
    /**
     * @override
     */
    constructor(parent, props, value, event) {
        super(parent, props, value, event)
        this.field = Layout.form.TEXT
    }
}