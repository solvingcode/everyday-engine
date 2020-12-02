define(function (require) {

    const FormMenuItem = require('../form/FormMenuItem.js')
    const Layout = require('../../Layout.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')

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
            return this.bindObject && !EntityManager.get().isAttachEntity(this.bindObject)
        }

        /**
         * @override
         */
        getFormObject(){
            return EntitySelector.get().getFirstSelected()
        }
    }

    return BackgroundFormMenuItem

})