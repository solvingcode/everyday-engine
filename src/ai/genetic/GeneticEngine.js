define(function (require) {

    const AiEngine = require('../AiEngine.js')
    const Genome = require('./Genome.js')

    /**
     * GeneticEngine class
     * Define the AI engine which use Genetic algorithms to train AI
     */
    class GeneticEngine extends AiEngine {

        constructor(physicsEngine) {
            super(physicsEngine)
            this.genomes = []
        }
        /**
         * @inheritdoc
         */
        update(entity) {
            return this.behave(entity)
        }
        /**
         * Get the brain of the given entity
         * @param {Entity} entity 
         */
        getGenome(entity) {
            const actualGenome = this.hasGenome(entity)
            const genome = actualGenome || new Genome(entity.id)
            !actualGenome && this.genomes.push(genome)
            return genome
        }
        /**
         * Check if entity has already a genome
         * @param {Entity} entity 
         */
        hasGenome(entity) {
            return this.genomes.find(genome => genome.entityId === entity.id)
        }
        /**
         * Decide which behavior to do for the given entity
         * @param {Entity} entity 
         */
        behave(entity) {
            const genome = this.getGenome(entity)
            const force = genome.getForce()
            force && entity.applyForce(this.physicsEngine, force)
            return force
        }
    }

    return GeneticEngine

})