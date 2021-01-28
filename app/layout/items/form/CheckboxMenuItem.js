define(function (require) {

    import Layout from '../../Layout.js'
    import InputMenuItem from './InputMenuItem.js'

    /**
     * Checkbox Menu Item
     */
    class CheckboxMenuItem extends InputMenuItem {
        /**
         * @override
         */
        constructor(parent, props, value, event) {
            super(parent, props, value, event)
            this.field = Layout.form.CHECKBOX
        }
    }

    export default CheckboxMenuItem

})