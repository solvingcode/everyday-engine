define(function (require) {

    const AiEngine = require('../AiEngine.js')

    /**
     * GeneticEngine class
     * Define the AI engine which use Genetic algorithms to train AI
     */
    class GeneticEngine extends AiEngine {
        /**
         * @inheritdoc
         */
        update(entity) {
            const move = Math.random() * 100 < 2
            if (move) {
                const { x, y } = entity.physics.velocity
                entity.move({ x: !y ? 2 : 0, y: !y ? -5 : 0 })
            }
            return move
        }
    }

    return GeneticEngine

})