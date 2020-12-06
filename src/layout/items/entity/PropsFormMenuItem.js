define(function (require) {

    const Layout = require('../../Layout.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const FormMenuItem = require('../form/FormMenuItem.js')

    /**
     * Form physics properties
     */
    class PropsFormMenuItem extends FormMenuItem {
        constructor(parent) {
            super({
                name: '',
                stateCode: '',
                type: Layout.type.FORM,
                zone: parent.zone
            })
            this.parent = parent
        }

        /**
         * @override
         */
        getFields() {
            return [
                {
                    bind: 'name',
                    label: 'Name',
                    type: Layout.form.TEXT
                },
                {
                    bind: 'static',
                    label: 'Static',
                    type: Layout.form.CHECKBOX
                },
                {
                    bind: 'motion',
                    label: 'Motion',
                    type: Layout.form.CHECKBOX
                },
                {
                    bind: 'controlled',
                    label: 'Controlled',
                    type: Layout.form.CHECKBOX
                }
            ]
        }

        /**
         * @override
         */
        getFormObject(){
            return EntitySelector.get().getFirstSelected()
        }
    }

    return PropsFormMenuItem

})