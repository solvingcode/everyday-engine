define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Input Menu Item
     * Can be used many times by the different menu items;
     * Start/run action must be handled differently
     */
    class InputMenuItem extends MenuItem {

        /**
         * @const
         * @type {string}
         */
        FORM_UPDATE = 'FORM_UPDATE'

        /**
         * @param {MenuItem} parent 
         * @param {Object} props
         * @param {any} value The default value
         * @param {callback} event The event bound to the field
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
         * @override
         */
        run() {
            const { event } = this
            this.startAction(this.FORM_UPDATE, this.id, { event, item: this })
        }
        /**
         * @override
         */
        stop() {
            this.stopAction(this.FORM_UPDATE)
        }
        /**
         * @override
         */
        isSelected() {
            return this.hasAction(this.FORM_UPDATE, this.id)
        }
        /**
         * @override
         */
        isValid() {
            return (!this.parent || this.parent.items.includes(this)) && this.parent.isValid();
        }

        /**
         * The event to call
         * @callback callback
         */
    }

    return InputMenuItem

})