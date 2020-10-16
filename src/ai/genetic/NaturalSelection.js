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
            this.doSnapshotData()
            const parents = this.doParentsSelection()
            const nextGenomes = this.doCrossover(parents)
            const genomes = this.doMutation(nextGenomes)
            return genomes
        }
        /**
         * Select parents
         */
        doParentsSelection() {
            const { genomes, nbGroups } = this.aiEngine
            const groupGenomes = this.getGroupGenomes(genomes)
            return genomes.map((p, index) => {
                const groupId = index % nbGroups
                const groupGenome = groupGenomes[groupId]
                const totalFitness = this.getTotalFitness(groupGenome)
                const randomFitness = Math.random() * totalFitness
                let randomBias = 0
                return groupGenome
                    .find(genome => {
                        randomBias += genome.fitness
                        return randomBias >= randomFitness
                    })
            })
        }
        /**
         * Group genomes by entity type
         */
        getGroupGenomes(genomes) {
            const { nbGroups } = this.aiEngine
            let groupGenomes = Array.from({ length: nbGroups }, () => [])
            genomes.map((genome, index) => {
                const groupId = index % nbGroups
                groupGenomes[groupId].push(genome)
            })
            return groupGenomes
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
            const { nbGroups, bestGenomes } = this.aiEngine
            const mutatedGenome = genomes.map(genome => genome.mutate())
            Array.from({ length: nbGroups }).forEach((v, index) => {
                mutatedGenome[index] = bestGenomes[index].clone()
                mutatedGenome[index].reset()
            })
            return mutatedGenome
        }
        /**
         * Get the best genome in the population
         * @param {Genome[]} genomes
         */
        getBestGenomes(genomes) {
            const groupGenomes = this.getGroupGenomes(genomes)
            return groupGenomes.map(groupGenome => {
                const bestGenome = groupGenome
                    .reduce((best, current) =>
                        best && best.fitness > current.fitness ? best : current,
                        null)
                bestGenome.setIsBest()
                return bestGenome
            })
        }
        /**
         * Calculate the fitness
         */
        calculateFitness(genomes) {
            genomes.forEach(genome => genome.calculateFitness())
        }
        /**
         * Get the best genome in the population
         * @param {Genome[]} genomes
         */
        getTotalFitness(genomes) {
            this.calculateFitness(genomes)
            return genomes.reduce((total, genome) => total + genome.fitness, 0)
        }
        /**
         * Do a snapshot of last generation's data
         */
        doSnapshotData() {
            const { genomes } = this.aiEngine
            this.aiEngine.totalFitness = this.getTotalFitness(genomes)
            this.aiEngine.bestGenomes = this.getBestGenomes(genomes)
        }
    }

    return NaturalSelection

})