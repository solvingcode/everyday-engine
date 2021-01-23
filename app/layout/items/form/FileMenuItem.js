define(function (require) {

    const Layout = require('../../Layout.js')
    const InputMenuItem = require('./InputMenuItem.js')

    /**
     * File Menu Item
     */
    class FileMenuItem extends InputMenuItem {
        /**
         * @param {MenuItem} parent 
         * @param {Object} props
         * @param {any} value The default value
         * @param {Function} event The event bound to the field
         */
        constructor(parent, props, value, event) {
            super(parent, props, value, event)
            this.field = Layout.form.FILE
        }
    }

    return FileMenuItem

})