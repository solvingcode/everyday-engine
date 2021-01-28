define(function (require) {

    import Layout from '../../Layout.js'
    import InputMenuItem from './InputMenuItem.js'

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

    export default FileMenuItem

})