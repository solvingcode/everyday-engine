define(function (require) {

    import Layout from '../../Layout.js'
    import World from '../../../world/World.js'
    import FormMenuItem from '../form/FormMenuItem.js'

    /**
     * Form AI Engine properties
     */
    class FormSimulationMenuItem extends FormMenuItem {
        constructor(parent) {
            super({
                name: 'Form Simulation',
                stateCode: '',
                type: Layout.type.FORM,
                zone: parent.zone
            })
            this.parent = parent
            this.init()
        }
        /**
         * @override
         */
        getFields() {
            return [
                {
                    bind: 'showOnlyBest',
                    label: 'Show only best',
                    type: Layout.form.CHECKBOX
                },
                {
                    bind: 'randomizeColor',
                    label: 'Randomize color',
                    type: Layout.form.CHECKBOX
                }
            ]
        }

        /**
         * @override
         */
        isValid() {
            return true
        }

        /**
         * @override
         */
        getFormObject(){
            return World.get().getAiEngine()
        }
    }

    export default FormSimulationMenuItem

})