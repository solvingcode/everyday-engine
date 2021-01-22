define(function (require) {

    const Loop = require('./Loop.js')
    const ObjectRenderer = require('../renderer/ObjectRenderer.js')
    const World = require('../world/World.js')
    const ConstraintRunner = require('../runner/constraint/ConstraintRunner.js')

    /**
     * @class {Scene}
     * @extends {Loop}
     */
    class Scene extends Loop{

        /**
         * @type {Scene}
         */
        static instance

        constructor() {
            super()
            this.objectRenderer = new ObjectRenderer()
            this.runners = [ConstraintRunner]
        }

        init(){
            //not needed
        }

        loop(){
            const world = World.get()
            world.update()
            world.draw(this.objectRenderer)
            this.objectRenderer.render(world.getCamera())
        }

    }

    return Scene

})