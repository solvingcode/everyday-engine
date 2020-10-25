define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')
    const GeneticEngine = require('../../../ai/genetic/GeneticEngine.js')

    /**
     * InfosMenuItem class
     * Show/Manage all informations for AI Genetic
     */
    class InfosMenuItem extends MenuItem {
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
            const {
                numGeneration,
                nbPerGeneration,
                bestGenomes,
                maxLifeInSec,
                timeToReactInSec,
                genomes
            } = aiEngine
            this.text = [
                `Generation : ${numGeneration}`,
                `Life (sec) : ${Math.round(maxLifeInSec - timeToReactInSec * genomes[0].stepBehavior)}`,
                `Population : ${nbPerGeneration}`,
                `Best distance : ${bestGenomes.length && bestGenomes[0].distance || 0}`,
            ]
        }

        /**
         * @inheritdoc
         */
        isValid() {
            return this.appState.hasState('SIMULATE_PROGRESS')
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

    return InfosMenuItem

})