define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')
    const GeneticEngine = require('../../../ai/genetic/GeneticEngine.js')

    /**
     * FitnessGraphMenuItem class
     * Show/Manage all informations for AI Genetic
     */
    class FitnessGraphMenuItem extends MenuItem {
        constructor(parent) {
            super({
                name: 'Fitness graph'
            })
            this.parent = parent
            this.zone = parent.zone
            this.type = Layout.type.GRAPH
            this.init()
        }

        /**
         * Initialize
         */
        init(){
            this.fitnessList = []
            this.graph = {
                type: 'line',
                maxY: 100,
                maxX: 200,
                data: [],
                version: 0
            }
            const aiEngine = GeneticEngine.get()
            this.engineVersion = aiEngine && aiEngine.getVersion()
        }

        /**
         * @inherit
         */
        update() {
            const aiEngine = GeneticEngine.get()
            if(this.engineVersion !== aiEngine.getVersion()){
                this.init()
            }
            const {
                numGeneration,
                bestGenomes
            } = aiEngine
            this.updateData(numGeneration, bestGenomes)
        }

        /**
         * Update the data of the graph
         */
        updateData(numGeneration, bestGenomes) {
            const isToUpdate = this.graph.version !== numGeneration
            if (bestGenomes.length && isToUpdate) {
                const fitness = bestGenomes[0].distance
                this.fitnessList.push(fitness)
                this.graph.version = numGeneration
                this.setupData()
            }
        }

        /**
         * Setup data (setup Y-axis, ...)
         * @param {Number} numGeneration
         */
        setupData() {
            const { maxY, maxX } = this.graph
            const maxFitness = this.fitnessList.reduce((max, fitness) => max > fitness ? max : fitness, 0)
            const maxListX = this.fitnessList.length
            this.graph.data = this.fitnessList.map((fitness, nGeneration) => ({
                x: Math.round(maxListX ? nGeneration / maxListX * maxX : 0),
                y: Math.round(maxFitness - (maxFitness ? fitness / maxFitness * maxY : 0))
            }))
        }

        /**
         * @inherit
         */
        isValid() {
            return this.appState.hasState('SIMULATE_PROGRESS')
        }

        /**
         * @inherit
         */
        run() { }

        /**
         * @inherit
         */
        isSelected() {
            return false
        }
    }

    return FitnessGraphMenuItem

})