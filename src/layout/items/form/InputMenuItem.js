define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Input Menu Item
     */
    class InputMenuItem extends MenuItem {
        /**
         * @param {MenuItem} parent 
         * @param {Object} props
         * @param {any} value The default value
         * @param {Function} event The event binded to the field
         */
        constructor(parent, props, value, event) {
            super(props)
            this.parent = parent
            this.zone = parent.zone
            this.type = Layout.type.FORM_ELEMENT
            this.event = event
            this.value = value
        }
        /**
         * @inherit
         */
        run() {
            const { event } = this
            this.setActionState('FORM_UPDATE', 'START')
            this.setDataState({ form: { event, item: this } })
        }
        /**
         * @inheritDoc
         */
        isSelected() {
            return false
        }
        /**
         * @inheritDoc
         */
        isValid() {
            return this.parent.isValid();
        }
    }

    return InputMenuItem

})