define(function (require) {

    import FormMenuItem from '../form/FormMenuItem.js'
    import Layout from '../../Layout.js'
    import World from '../../../world/World.js'

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

    export default UpdateTextureFormMenuItem

})