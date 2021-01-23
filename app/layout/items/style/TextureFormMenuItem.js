define(function (require) {

    const FormMenuItem = require('../form/FormMenuItem.js')
    const Layout = require('../../Layout.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const World = require('../../../world/World.js')

    /**
     * @class {TextureFormMenuItem}
     * @property {Entity} bindObject
     */
    class TextureFormMenuItem extends FormMenuItem {
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
            const textures = World.get().getTextureManager().getTextures()
                .map(texture => ({ value: texture.id, label: texture.name }))

            return [
                {
                    bind: 'backgroundImageRepeat',
                    label: 'Texture repeat',
                    type: Layout.form.CHECKBOX
                },
                {
                    bind: 'textureId',
                    label: 'Texture',
                    type: Layout.form.DROPDOWN,
                    list: textures
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

    return TextureFormMenuItem

})