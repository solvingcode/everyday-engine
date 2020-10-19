define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Checkbox Menu Item
     */
    class CheckboxMenuItem extends MenuItem {
        /**
         * @param {MenuItem} parent 
         * @param {any} value The default value
         * @param {Function} event The event binded to the field
         */
        constructor(parent, value, event) {
            super({
                name: 'Static'
            })
            this.parent = parent
            this.zone = parent.zone
            this.type = Layout.type.FORM_ELEMENT
            this.field = Layout.form.CHECKBOX
            this.event = event
            this.value = value
        }
        /**
         * @inheritdoc
         */
        run() {
            const { event } = this
            this.setActionState('FORM_UPDATE', 'START')
            this.setDataState({ form: { event, item: this } })
        }
        /**
         * @inheritdoc
         */
        isSelected() {
            return false
        }
    }

    return CheckboxMenuItem

})