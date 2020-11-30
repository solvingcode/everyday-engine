define(function (require) {

    const AiEngine = require('../AiEngine.js')
    const Genome = require('./Genome.js')
    const Storage = require('../../core/Storage.js')
    const NaturalSelection = require('./NaturalSelection.js')
    const Color = require('../../utils/Color.js')
    const Maths = require('../../utils/Maths.js')

    /**
     * GeneticEngine class
     * Define the AI engine which use Genetic algorithms to train AI
     * @property {Genome[]} genomes
     * @property {number} nbGroups
     * @property {boolean} showOnlyBest
     * @property {boolean} randomizeColor
     */
    class GeneticEngine extends AiEngine {

        constructor(physics, entityManager, camera) {
            super(physics, entityManager, camera)
            this.naturalSelection = new NaturalSelection(this)
            this.nbPerGeneration = 20
            this.showOnlyBest = true
            this.randomizeColor = false
            this.maxLifeInSec = 20
            this.timeToReactInSec = 0.1
            this.mutationProb = 0.01
            this.genomes = []
            this.nbGroups = 0
            this.population = []
            GeneticEngine.instance = this
        }
        /**
         * @override
         */
        init() {
            this.newVersion()
            this.numGeneration = 0
            this.totalFitness = 0
            this.bestGenomes = []
            this.nbGroups = this.getPopulation().length
            this.initGenomes()
            this.newGeneration()
            this.updateCamera()
        }
        /**
         * @return {number}
         */
        getNbPerGeneration(){
            return this.nbPerGeneration
        }
        /**
         * @param {number} value
         */
        setNbPerGeneration(value){
            this.nbPerGeneration = value
        }
        /**
         * @return {number}
         */
        getMaxLifeInSec(){
            return this.maxLifeInSec
        }
        /**
         * @param {number} value
         */
        setMaxLifeInSec(value){
            this.maxLifeInSec = value
        }
        /**
         * @return {number}
         */
        getMutationProb(){
            return this.mutationProb
        }
        /**
         * @param {number} value
         */
        setMutationProb(value){
            this.mutationProb = value
        }
        /**
         * @override
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
         * @return {boolean}
         */
        isShowOnlyBest(){
            return this.showOnlyBest
        }
        /**
         * Set show only best genome
         * PS. the first element in the population is maintained as the best genome
         * @param {boolean} value
         */
        setShowOnlyBest(value){
            this.showOnlyBest = value
            this.getPopulation().forEach((entity, index) => {
                if(index >= this.nbGroups){
                    value ? this.entityManager.hide(entity) : this.entityManager.show(entity)
                }
            })
        }
        /**
         * @return {boolean}
         */
        isRandomizeColor(){
            return this.randomizeColor
        }
        /**
         * @param {boolean} randomizeColor
         */
        setRandomizeColor(randomizeColor){
            this.randomizeColor = randomizeColor
        }
        /**
         * Update population
         */
        updatePopulation() {
            this.population = this.getPopulation()
        }
        /**
         * Get the population using the entity manager
         * @return {Entity[]}
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
                this.randomizeColor && this.updateColor(genome)
            })
        }
        /**
         * Get the genome of the given entity
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
                    const color = colors[Math.floor(index / this.nbGroups)]
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
            this.resetPopulation()
            this.newPopulation()
            this.updatePopulation()
            this.setupGenomes()
            this.setShowOnlyBest(this.showOnlyBest)
            this.numGeneration++
            if (this.numGeneration > 1) {
                this.physics.setToRestart(true)
            }
        }
        /**
         * Reset the population
         */
        resetPopulation() {
            this.entityManager.entities = Storage.get().fetch(Storage.type.ENTITY)
        }
        /**
         * Create a new population
         */
        newPopulation() {
            const entities = this.entityManager.getDynamicEntities()
            const clones = Array.from({ length: this.nbPerGeneration - 1 })
                .map((c, index) => {
                    return this.entityManager.cloneEntities(entities, { sameWorld: true })
                })
                .reduce((list, currentList) => currentList.concat(list), [])
            this.entityManager.concatEntities(clones)
            this.entityManager.disableCollision()
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
            this.camera.attach(this.population[0])
        }
        /**
         * Update the color of the genome
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