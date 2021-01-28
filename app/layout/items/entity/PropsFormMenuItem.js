define(function (require) {

    import Layout from '../../Layout.js'
    import EntitySelector from '../../../world/manager/EntitySelector.js'
    import FormMenuItem from '../form/FormMenuItem.js'
    import World from '../../../world/World.js'

    /**
     * Form physics properties
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
                    bind: 'name',
                    label: 'Name',
                    type: Layout.form.TEXT
                },
                {
                    bind: 'fixed',
                    label: 'Static',
                    type: Layout.form.CHECKBOX
                },
                {
                    bind: 'motion',
                    label: 'Motion',
                    type: Layout.form.CHECKBOX
                },
                {
                    bind: 'controlled',
                    label: 'Controlled',
                    type: Layout.form.CHECKBOX
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

    export default PropsFormMenuItem

})