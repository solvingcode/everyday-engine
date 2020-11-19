define(function (require) {

    const Layout = require('../../Layout.js')
    const InputMenuItem = require('./InputMenuItem.js')

    /**
     * Checkbox Menu Item
     */
    class CheckboxMenuItem extends InputMenuItem {
        /**
         * @inheritDoc
         */
        constructor(parent, props, value, event) {
            super(parent, props, value, event)
            this.field = Layout.form.CHECKBOX
        }
    }

    return CheckboxMenuItem

})