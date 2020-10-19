define(function (require) {

    const Layout = require('../../Layout.js')
    const InputMenuItem = require('./InputMenuItem.js')

    /**
     * Text Menu Item
     */
    class TextMenuItem extends InputMenuItem {
        /**
         * @param {MenuItem} parent 
         * @param {Object} props
         * @param {any} value The default value
         * @param {Function} event The event binded to the field
         */
        constructor(parent, props, value, event) {
            super(parent, props, value, event)
            this.field = Layout.form.TEXT
        }
    }

    return TextMenuItem

})