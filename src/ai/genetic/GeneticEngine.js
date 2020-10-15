define(function (require) {

    const AiEngine = require('../AiEngine.js')
    const Genome = require('./Genome.js')
    const Storage = require('../../core/Storage.js')
    const NaturalSelection = require('./NaturalSelection.js')
    const World = require('../../world/World.js')
    const Color = require('../../utils/Color.js')
    const Maths = require('../../utils/Maths.js')

    /**
     * GeneticEngine class
     * Define the AI engine which use Genetic algorithms to train AI
     */
    class GeneticEngine extends AiEngine {

        constructor(physics, entityManager) {
            super(physics, entityManager)
            this.naturalSelection = new NaturalSelection(this)
            this.nbPerGeneration = 20
            this.maxLifeInSec = 20
            this.timeToReactInSec = 0.5
            this.genomes = []
            this.nbGroups = 0
            this.population = []
            this.numGeneration = 0
            this.bestGenomes = []
            GeneticEngine.instance = this
        }
        /**
         * @inheritdoc
         */
        init() {
            this.nbGroups = this.getPopulation().length
            this.initGenomes()
            this.newGeneration()
        }
        /**
         * @inheritdoc
         */
        update() {
            if (this.isPopulationDead()) {
                this.genomes = this.naturalSelection.run()
                this.newGeneration()
                this.updateCamera()
            } else {
                this.population.map(entity => this.behave(entity))
            }
        }
        /**
         * Update population
         */
        updatePopulation() {
            this.population = this.getPopulation()
        }
        /**
         * Get the population using the entity manager
         */
        getPopulation() {
            return this.entityManager
                .getDynamicEntities()
                .filter(entity => this.entityManager.isBodyEntity(entity))
        }
        /**
         * Setup the genomes (link to an entity)
         */
        setupGenomes() {
            this.genomes.forEach((genome, index) => {
                genome.setEntity(this.population[index])
                this.updateColor(genome)
            })
        }
        /**
         * Get the brain of the given entity
         * @param {Entity} entity 
         */
        getGenome(entity) {
            return this.genomes.find(genome => genome.entityId === entity.id)
        }
        /**
         * Init genomes
         */
        initGenomes() {
            const colors = Array.from({ length: this.nbPerGeneration })
                .map(() => Color.fromArrayInt([Maths.generateId()]))
            this.genomes = Array.from({ length: this.nbPerGeneration * this.nbGroups })
                .map((v, index) => {
                    const color = colors[parseInt(index / this.nbGroups)]
                    return new Genome(this, { color })
                })
        }
        /**
         * Decide which behavior to do for the given entity
         * @param {Entity} entity 
         */
        behave(entity) {
            const genome = this.getGenome(entity)
            return genome.behave(entity)
        }
        /**
         * Make a new generation
         */
        newGeneration() {
            this.entityManager.entities = Storage.get().fetch(Storage.type.ENTITY)
            const entities = this.entityManager.getDynamicEntities()
            Array.from({ length: this.nbPerGeneration - 1 })
                .forEach(() => this.entityManager.cloneEntities(entities))
            this.entityManager.disableCollision()
            this.updatePopulation()
            this.setupGenomes()
            this.numGeneration++
            if (this.numGeneration > 1) {
                this.physics.restart()
            }
        }
        /**
         * Check if the population is dead
         */
        isPopulationDead() {
            return !this.population.find(entity => this.getGenome(entity).isAlive())
        }
        /**
         * Update the camera position
         */
        updateCamera() {
            World.get().getCamera().attach(this.population[0])
        }
        /**
         * Update the color genome
         */
        updateColor(genome) {
            this.entityManager.findById(genome.entityId)
                .setStyleAndGenerate({ fillColor: '#' + genome.props.color })
        }

        static get() {
            return GeneticEngine.instance
        }
    }

    GeneticEngine.instance = null

    return GeneticEngine

})