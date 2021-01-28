define(function (require) {

    import FormMenuItem from '../form/FormMenuItem.js'
    import Layout from '../../Layout.js'
    import EntitySelector from '../../../world/manager/EntitySelector.js'
    import World from '../../../world/World.js'

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

    export default TextureFormMenuItem

})