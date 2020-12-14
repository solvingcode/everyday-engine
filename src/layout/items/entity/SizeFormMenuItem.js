define(function (require) {

    const Layout = require('../../Layout.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const FormMenuItem = require('../form/FormMenuItem.js')

    /**
     * Entity's size properties
     */
    class SizeFormMenuItem extends FormMenuItem {
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
                    bind: 'width',
                    label: 'Width',
                    type: Layout.form.TEXT
                },
                {
                    bind: 'height',
                    label: 'Height',
                    type: Layout.form.TEXT
                },
                {
                    bind: 'rotationDegree',
                    label: 'Rotation (°)',
                    type: Layout.form.TEXT
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

    return SizeFormMenuItem

})