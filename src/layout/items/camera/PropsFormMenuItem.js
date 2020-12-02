define(function (require) {

    const Layout = require('../../Layout.js')
    const World = require('../../../world/World.js')
    const FormMenuItem = require('../form/FormMenuItem.js')

    /**
     * Form properties
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
                    bind: 'positionX',
                    label: 'X',
                    type: Layout.form.TEXT
                },
                {
                    bind: 'positionY',
                    label: 'Y',
                    type: Layout.form.TEXT
                }
            ]
        }

        /**
         * @override
         */
        getFormObject(){
            return World.get().getCamera()
        }
    }

    return PropsFormMenuItem

})