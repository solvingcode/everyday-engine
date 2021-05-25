import Scene from './Scene.js'
import World from '../world/World.js'
import Window from '../core/Window.js'
import ExecutorRegistry from '../executor/ExecutorRegistry.js'
import MeshGenerationExecutor from '../executor/type/MeshGenerationExecutor.js'
import EventRunner from '../runner/event/EventRunner.js'
import {GameRenderRunner} from '../runner/renderer/GameRenderRunner.js'
import {GameExecutorRunner} from '../runner/executor/GameExecutorRunner.js'
import RigidBodyExecutor from '../executor/type/RigidBodyExecutor.js'
import {PhysicsRunner} from '../runner/physics/PhysicsRunner.js'
import ColliderExecutor from '../executor/type/ColliderExecutor.js'

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
        ExecutorRegistry.get().register([
            new MeshGenerationExecutor(),
            new RigidBodyExecutor(),
            new ColliderExecutor()
        ])
        this.runners = [EventRunner, GameRenderRunner, GameExecutorRunner, PhysicsRunner]
    }

    /**
     * @override
     */
    async doInit() {
        await super.doInit()
        const world = World.get()
        const window = Window.get()
        window.setSize(world.getResolution())
        world.setupCamera()
        world.regenerateAll()
        world.getPhysicsManager().init()
    }

}

export default Game