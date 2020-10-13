define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')
    const GeneticEngine = require('../../../ai/genetic/GeneticEngine.js')

    /**
     * AiGeneticInfosMenuItem class
     * Show/Manage all informations for AI Genetic
     */
    class AiGeneticInfosMenuItem extends MenuItem {
        constructor(parent, data) {
            super({
                name: 'AI Genetic'
            })
            this.parent = parent
            this.data = data
            this.zone = parent.zone
            this.type = Layout.type.TEXT
        }

        /**
         * @inheritdoc
         */
        update() {
            const { numGeneration, nbPerGeneration, totalFitness } = GeneticEngine.get()
            this.text = [
                `Generation : ${numGeneration}`,
                `Population : ${nbPerGeneration}`,
                `Fitness : ${totalFitness}`
            ]
        }

        /**
         * @inheritdoc
         */
        isValid() {
            return this.parent.isValid()
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
    }

    return AiGeneticInfosMenuItem

})