define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Checkbox Menu Item
     */
    class CheckboxMenuItem extends MenuItem {
        constructor(parent, form) {
            super({
                name: 'Static'
            })
            this.parent = parent
            this.form = form
            this.zone = parent.zone
            this.type = Layout.type.FORM_ELEMENT
            this.field = Layout.form.CHECKBOX
        }
        /**
         * @inheritdoc
         */
        run() {
            this.setActionState('FORM_UPDATE', 'START')
            this.setDataState({ form: this.form })
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