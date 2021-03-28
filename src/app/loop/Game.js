import Scene from './Scene.js'
import World from '../world/World.js'
import Window from '../core/Window.js'

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
        //this.runners = [ConstraintRunner]
    }

    /**
     * @override
     */
    async init() {
        await super.init()
        const world = World.get()
        const window = Window.get()
        window.setSize(world.getResolution())
        world.getPhysics().run(world)
        world.setupCamera()
        world.regenerateAll()
    }

    /**
     * @override
     */
    loop() {
        super.loop()
        const world = World.get()
        //world.getPhysics().update(world, world.getAiEngine())
    }

}

export default Game