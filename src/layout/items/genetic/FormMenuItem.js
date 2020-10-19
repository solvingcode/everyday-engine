define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')
    const World = require('../../../world/World.js')
    const TextMenuItem = require('../form/TextMenuItem.js')
    const Maths = require('../../../utils/Maths.js')

    /**
     * Form AI Engine properties
     */
    class FormMenuItem extends MenuItem {
        constructor(parent, data) {
            super({
                name: 'Properties'
            })
            this.parent = parent
            this.data = data
            this.zone = parent.zone
            this.type = Layout.type.FORM
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
         * @inheritdoc
         */
        run() { }
        /**
         * @inheritdoc
         */
        isSelected() {
            return false
        }
        /**
         * @inheritdoc
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
                new TextMenuItem(this,
                    { name: 'Nb. Generation' },
                    () => this.object.nbPerGeneration,
                    (value) => this.object.nbPerGeneration = value
                ),
                new TextMenuItem(this,
                    { name: 'Max. life (sec)' },
                    () => this.object.maxLifeInSec,
                    (value) => this.object.maxLifeInSec = value
                ),
                new TextMenuItem(this,
                    { name: 'Mutation rate (%)' },
                    () => this.object.mutationProb * 100,
                    (value) => this.object.mutationProb = value / 100
                )
            ]
            this.version = Maths.generateId()
        }
    }

    return FormMenuItem

})