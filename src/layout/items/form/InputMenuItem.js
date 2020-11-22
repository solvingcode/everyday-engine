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
         * @param {MenuItem} parent
         * @param {Object} props
         * @param {any} value The default value
         * @param {callback} event The event bound to the field
         */
        constructor(parent, props, value, event) {
            super({
                stateCode: 'ACTION_FORM_UPDATE',
                zone: parent.zone,
                type: Layout.type.FORM_ELEMENT,
                ...props
            })
            this.parent = parent
            this.event = event
            this.value = value
            this.data = {event, item: this}
        }

        /**
         * Input menu item must be valid as the parent keeps valid
         * @override
         */
        isValid() {
            return this.parent.isValid()
        }

        /**
         * The event to call
         * @callback callback
         */
    }

    return InputMenuItem

})