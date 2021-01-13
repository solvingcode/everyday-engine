define(function (require) {

    const FormMenuItem = require('../form/FormMenuItem.js')
    const Layout = require('../../Layout.js')
    const World = require('../../../world/World.js')

    /**
     * @class {UpdateTextureFormMenuItem}
     */
    class UpdateTextureFormMenuItem extends FormMenuItem {
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
                }
            ]
        }

        /**
         * @override
         */
        getFormObject(){
            return World.get().getTextureManager().getSelectedTexture()
        }
    }

    return UpdateTextureFormMenuItem

})