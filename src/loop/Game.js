define(function (require) {

    const Scene = require('./Scene.js')
    const World = require('../world/World.js')

    /**
     * @class {Game}
     * @extends {Loop}
     */
    class Game extends Scene{

        /**
         * @type {Game}
         */
        static instance

        /**
         * @override
         */
        init(){
            super.init()
            const world = World.get()
            world.getPhysics().run(world)
        }

        /**
         * @override
         */
        loop(){
            super.loop()
            const world = World.get()
            world.getPhysics().update(world, world.getAiEngine())
            world.updateCamera()
        }

    }

    return Game

})