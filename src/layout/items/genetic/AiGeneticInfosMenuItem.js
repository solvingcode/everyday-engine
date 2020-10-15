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
            const { numGeneration, nbPerGeneration, bestGenomes, maxLifeInSec } = aiEngine
            const scoreForce = this.getScoreForce(bestGenomes)
            this.text = [
                `Generation : ${numGeneration}`,
                `Max life (sec) : ${maxLifeInSec}`,
                `Population : ${nbPerGeneration}`,
                `Best distance : ${bestGenomes.length && bestGenomes[0].distance || 0}`,
                `Score force : ${scoreForce || 0} %`
            ]
        }

        /**
         * Calculate the average force
         */
        getScoreForce(genomes) {
            const genome = genomes.length && genomes[0]
            return genome &&
                Math.round((genome.forces.reduce((total, force) => total + force.x, 0) / genome.forces.length) /
                    genome.maxForce * 100)
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

    return AiGeneticInfosMenuItem

})