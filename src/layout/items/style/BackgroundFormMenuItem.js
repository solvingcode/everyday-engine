define(function (require) {

    const FormMenuItem = require('../form/FormMenuItem.js')
    const Layout = require('../../Layout.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const World = require('../../../world/World.js')

    /**
     * Form style background
     * @property {Entity} bindObject
     */
    class BackgroundFormMenuItem extends FormMenuItem {
        constructor(parent) {
            super({
                name: 'Background',
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
                    bind: 'backgroundImageRepeat',
                    label: 'Background repeat',
                    type: Layout.form.CHECKBOX
                },
                {
                    bind: 'backgroundImageBlob',
                    label: 'Background',
                    type: Layout.form.FILE
                }
            ]
        }

        /**
         * @override
         */
        shouldUpdate(){
            return this.bindObject && !World.get().getEntityManager().isAttachEntity(this.bindObject)
        }

        /**
         * @override
         */
        getFormObject(){
            return EntitySelector.get().getFirstSelected(World.get())
        }
    }

    return BackgroundFormMenuItem

})