define(function () {

    /**
     * NaturalSelection class
     * Define methods for natural selection
     */
    class NaturalSelection {
        constructor(aiEngine) {
            this.aiEngine = aiEngine
        }
        /**
         * Start the natural selection
         */
        run() {
            const parents = this.doSelection()
            const nextGenomes = this.doCrossover(parents)
            const genomes = this.doMutation(nextGenomes)
            return genomes
        }
        /**
         * Select parents
         */
        doSelection() {
            const { genomes, population } = this.aiEngine
            const totalFitness = genomes.reduce((total, genome) => total + genome.fitness, 0)
            this.aiEngine.totalFitness = totalFitness
            return population.map(() => {
                const randomFitness = Math.random() * totalFitness
                let randomBias = 0
                return genomes
                    .sort((genA, genB) => genA.fitness < genB.fitness)
                    .find(genome => {
                        randomBias += genome.fitness
                        return randomBias >= randomFitness
                    })
            })
        }
        /**
         * Crossover the genome
         * @param {Genome[]} parents
         */
        doCrossover(parents) {
            return parents.map(parent => {
                const genome = parent.clone()
                genome.reset()
                return genome
            })
        }
        /**
         * Mutate genomes
         * @param {Genome[]} genomes 
         */
        doMutation(genomes) {
            const bestGenome = this.getBestGenome(genomes)
            return genomes.map((genome, index) => {
                if (index === 0) {
                    genome = bestGenome
                } else {
                    genome.mutate()
                }
                return genome
            })
        }
        /**
         * Get the best genome in the population
         */
        getBestGenome(genomes) {
            return genomes
                .sort((genA, genB) => genA.fitness > genB.fitness)[0]
        }
    }

    return NaturalSelection

})