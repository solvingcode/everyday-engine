define(function (require) {

    const FormMenuItem = require('../form/FormMenuItem.js')
    const Layout = require('../../Layout.js')
    const World = require('../../../world/World.js')

    /**
     * @class {AddTextureFormMenuItem}
     */
    class AddTextureFormMenuItem extends FormMenuItem {
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
                    bind: 'texture',
                    label: 'Add Texture',
                    type: Layout.form.FILE
                }
            ]
        }

        /**
         * @override
         */
        getFormObject(){
            return World.get().getTextureManager()
        }
    }

    return AddTextureFormMenuItem

})