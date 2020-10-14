define(function () {

    /**
     * Genome class
     * Define the Genome of the given entity (behaviors)
     */
    class Genome {
        constructor({ timeToReactInSec, maxLifeInSec }) {
            this.mutationProb = 0.01
            this.props = { timeToReactInSec, maxLifeInSec }
            this.forces = []
            this.reset()
            this.init()
        }
        /**
         * Init the genome (forces)
         */
        init() {
            this.forces = Array.from({ length: this.props.maxLifeInSec / this.props.timeToReactInSec },
                () => this.generateRandomForce()
            )
        }
        /**
         * Reset the genome
         */
        reset() {
            this.timeCounter = 0
            this.stepBehavior = 0
            this.alive = true
            this.fitness = 0
            this.distance = 0
        }
        /**
         * Set the entity and store initial data
         * @param {Entity} entity 
         */
        setEntity(entity) {
            this.entityId = entity.id
            this.startPosition = entity.position
        }
        /**
         * Get the actual force to apply
         */
        getForce() {
            if (this.haveToBehave()) {
                return this.forces[this.stepBehavior]
            }
            return { x: 0, y: 0 }
        }
        /**
         * Decide if the gonme have to behave
         */
        haveToBehave() {
            if (this.timeCounter >= 60 * this.props.timeToReactInSec) {
                this.timeCounter = 0
                this.stepBehavior++
                return true
            }
            this.timeCounter++
            return false
        }
        /**
         * Decide if the genome have to die
         */
        haveToDie() {
            this.alive = this.stepBehavior < this.forces.length - 1
        }
        /**
         * Is the genome alive
         */
        isAlive() {
            return this.alive
        }
        /**
         * Calculate the fitness
         * @param {Entity} entity 
         */
        calculateFitness(entity) {
            const distance = entity.position.x - this.startPosition.x
            this.fitness = distance < 0 ? 0 : distance * distance
            this.distance = distance
        }
        /**
         * Decide what to do 
         */
        behave(entity) {
            if (this.isAlive()) {
                const force = this.getForce()
                entity.setForce(force)
                this.haveToDie()
                this.calculateFitness(entity)
            }
        }
        /**
         * Mutate the genome
         */
        mutate() {
            this.forces.forEach((force, index) => {
                const randMutate = Math.random()
                if (randMutate < this.mutationProb) {
                    this.forces[index] = this.generateRandomForce()
                }
            })
        }
        /**
         * Generate random force
         */
        generateRandomForce() {
            return { x: Math.round(Math.random() * 0.03 * 1000) / 1000, y: 0 }
        }
        /**
         * Clone the genome
         */
        clone() {
            return _.cloneDeep(this)
        }
    }

    return Genome

})