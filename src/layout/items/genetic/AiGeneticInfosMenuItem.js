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
            const aiEngine = GeneticEngine.get()
            const { numGeneration, nbPerGeneration, bestGenomes } = aiEngine
            this.text = [
                `Generation : ${numGeneration}`,
                `Population : ${nbPerGeneration}`,
                `Best distance : ${bestGenomes && bestGenomes[0].distance || 0}`
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