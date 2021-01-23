define(function (require) {

    const Layout = require('../../Layout.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const FormMenuItem = require('../form/FormMenuItem.js')
    const World = require('../../../world/World.js')

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

    return NoiseFormMenuItem

})