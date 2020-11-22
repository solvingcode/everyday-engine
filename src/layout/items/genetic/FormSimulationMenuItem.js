define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')
    const World = require('../../../world/World.js')
    const CheckboxMenuItem = require('../form/CheckboxMenuItem.js')
    const Maths = require('../../../utils/Maths.js')

    /**
     * Form AI Engine properties
     */
    class FormSimulationMenuItem extends MenuItem {
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
         * Init the menu item
         */
        init() {
            this.object = null
            this.items = []
            this.version = 0
        }
        /**
         * @override
         */
        isValid() {
            return this.parent.isValid()
        }
        /**
         * @override
         */
        update() {
            const aiEngine = World.get().getAiEngine()
            if (aiEngine !== this.object) {
                this.object = aiEngine
                this.updateForm()
            }
        }
        /**
         * Update the form
         */
        updateForm() {
            this.items = [
                new CheckboxMenuItem(this,
                    { name: 'Show only best' },
                    () => this.object.showOnlyBest,
                    (value) => this.object.setShowOnlyBest(value)
                )
            ]
            this.version = Maths.generateId()
        }
    }

    return FormSimulationMenuItem

})