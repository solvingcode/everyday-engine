import Scene from './Scene.js'
import World from '../world/World.js'
import ConstraintRunner from '../runner/constraint/ConstraintRunner.js'

/**
 * @class {Game}
 * @extends {Loop}
 */
class Game extends Scene {

    /**
     * @type {Game}
     */
    static instance

    constructor() {
        super()
        this.runners = [ConstraintRunner]
    }

    /**
     * @override
     */
    async init() {
        await super.init()
        const world = World.get()
        world.getPhysics().run(world)
    }

    /**
     * @override
     */
    loop() {
        super.loop()
        const world = World.get()
        world.getPhysics().update(world, world.getAiEngine())
        world.updateCamera()
    }

}

export default Game