define(function (require) {

    const Layout = require('../../Layout.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const FormMenuItem = require('../form/FormMenuItem.js')
    const World = require('../../../world/World.js')

    /**
     * Entity's position properties
     */
    class PositionFormMenuItem extends FormMenuItem {
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
            return EntitySelector.get().getFirstSelected(World.get())
        }
    }

    return PositionFormMenuItem

})