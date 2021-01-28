define(function (require) {

    import Layout from '../../Layout.js'
    import InputMenuItem from './InputMenuItem.js'

    /**
     * Checkbox Menu Item
     */
    class DropdownMenuItem extends InputMenuItem {
        /**
         * @param {MenuItem} parent 
         * @param {Object} props
         * @param {any} value The default value
         * @param {Function} event The event binded to the field
         */
        constructor(parent, props, value, event) {
            super(parent, props, value, event)
            this.field = Layout.form.DROPDOWN
        }
    }

    export default DropdownMenuItem

})