define(function (require) {

    const Loop = require('./Loop.js')
    const ObjectRenderer = require('../renderer/ObjectRenderer.js')
    const World = require('../world/World.js')
    const ConstraintRunner = require('../runner/constraint/ConstraintRunner.js')

    /**
     * @class {Game}
     * @extends {Loop}
     */
    class Game extends Loop{

        /**
         * @type {Game}
         */
        static instance

        constructor() {
            super()
            this.objectRenderer = new ObjectRenderer()
            this.runners = [ConstraintRunner]
        }

        loop(){
            const world = World.get()
            world.update()
            world.draw(this.objectRenderer)
            this.objectRenderer.clear()
            this.objectRenderer.render(world.getCamera())
        }

    }

    return Game

})