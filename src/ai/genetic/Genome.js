define(function () {

    /**
     * Genome class
     * Define the Genome of the given entity (behaviors)
     */
    class Genome {
        constructor(entityId) {
            this.entityId = entityId
            this.forces = []
            this.timeCounter = 0
            this.timeToReactInSec = 0.5
            this.stepBehavior = 0
            this.init()
        }
        /**
         * Init the genome (forces)
         */
        init() {
            this.forces = Array.from({ length: 500 },
                () => ({ x: Math.random() * 0.03, y: 0})
            )
        }
        /**
         * Get the actual force to apply
         */
        getForce() {
            if (this.haveToBehave()) {
                return this.forces[this.stepBehavior]
            }
            return null
        }
        /**
         * Decide if the gonme have to behave
         */
        haveToBehave() {
            if (this.timeCounter >= 60 * this.timeToReactInSec) {
                this.timeCounter = 0
                this.stepBehavior++
                return true
            }
            this.timeCounter++
            return false
        }
    }

    return Genome

})