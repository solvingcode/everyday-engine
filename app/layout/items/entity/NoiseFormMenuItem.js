define(function (require) {

    import Layout from '../../Layout.js'
    import EntitySelector from '../../../world/manager/EntitySelector.js'
    import FormMenuItem from '../form/FormMenuItem.js'
    import World from '../../../world/World.js'

    /**
     * Entity's noise configs properties
     */
    class NoiseFormMenuItem extends FormMenuItem {
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
                    bind: 'seed',
                    label: 'Seed',
                    type: Layout.form.TEXT
                },
                {
                    bind: 'octaves',
                    label: 'Octaves',
                    type: Layout.form.TEXT
                },
                {
                    bind: 'amplitude',
                    label: 'Amplitude',
                    type: Layout.form.TEXT
                },
                {
                    bind: 'persistence',
                    label: 'Persistence',
                    type: Layout.form.TEXT
                },
                {
                    bind: 'smoothness',
                    label: 'Smoothness',
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

    export default NoiseFormMenuItem

})