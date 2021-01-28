define(function (require) {

    import Layout from '../../Layout.js'
    import World from '../../../world/World.js'
    import FormMenuItem from '../form/FormMenuItem.js'

    /**
     * Form AI Engine properties
     */
    class AiFormMenuItem extends FormMenuItem {
        constructor(parent) {
            super({
                name: 'Properties',
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
                    bind: 'nbPerGeneration',
                    label: 'Nb. Generation',
                    type: Layout.form.TEXT
                },
                {
                    bind: 'maxLifeInSec',
                    label: 'Max. life (sec)',
                    type: Layout.form.TEXT
                },
                {
                    bind: 'mutationProb',
                    label: 'Mutation rate',
                    type: Layout.form.TEXT
                }
            ]
        }

        /**
         * @override
         */
        getFormObject(){
            return World.get().getAiEngine()
        }
    }

    export default AiFormMenuItem

})