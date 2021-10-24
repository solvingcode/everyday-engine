import SceneLoop from './SceneLoop.js'
import World from '../world/World.js'
import Window from '../core/Window.js'
import ExecutorRegistry from '../executor/ExecutorRegistry.js'
import MeshGenerationExecutor from '../executor/type/MeshGenerationExecutor.js'
import {GameExecutorRunner} from '../runner/executor/GameExecutorRunner.js'
import RigidBodyExecutor from '../executor/type/RigidBodyExecutor.js'
import {PhysicsRunner} from '../runner/physics/PhysicsRunner.js'
import ColliderExecutor from '../executor/type/ColliderExecutor.js'
import MeshStyleExecutor from '../executor/type/MeshStyleExecutor.js'
import ScriptExecutor from '../executor/type/ScriptExecutor.js'
import AnimationScriptExecutor from '../executor/type/AnimationScriptExecutor.js'
import WorldInitializeRunner from '../runner/world/WorldInitializeRunner.js'
import ColliderDebugRunner from '../runner/debug/ColliderDebugRunner.js'
import CameraRunner from '../runner/camera/CameraRunner.js'
import CameraExecutor from '../executor/type/CameraExecutor.js'
import LightExecutor from '../executor/type/LightExecutor.js'
import LightRunner from '../runner/light/LightRunner.js'
import SceneRunner from '../runner/scene/SceneRunner.js'
import TransformExecutor from '../executor/type/TransformExecutor.js'
import MeshExecutor from '../executor/type/MeshExecutor.js'
import MeshRendererExecutor from '../executor/type/MeshRendererExecutor.js'
import ScreenTransformExecutor from '../executor/type/ScreenTransformExecutor.js'
import UITransformExecutor from '../executor/type/UITransformExecutor.js'
import UIButtonInteractionExecutor from '../executor/type/UIButtonInteractionExecutor.js'
import UISliderHandleExecutor from '../executor/type/UISliderHandleExecutor.js'
import UISliderFillExecutor from '../executor/type/UISliderFillExecutor.js'
import AnimationPlayerExecutor from '../executor/type/AnimationPlayerExecutor.js'

/**
 * @class {GameLoop}
 * @extends {Loop}
 */
class GameLoop extends SceneLoop {

    /**
     * @type {GameLoop}
     */
    static instance

    constructor() {
        super()
        this.runners = [
            WorldInitializeRunner, SceneRunner, ColliderDebugRunner,
            CameraRunner, GameExecutorRunner, PhysicsRunner, LightRunner]
        ExecutorRegistry.get().register([
            new CameraExecutor(),
            new AnimationPlayerExecutor(),
            new MeshExecutor(),
            new TransformExecutor(),
            new UITransformExecutor(),
            new UIButtonInteractionExecutor(),
            new UISliderHandleExecutor(),
            new MeshGenerationExecutor(),
            new RigidBodyExecutor(),
            new ColliderExecutor(),
            new MeshStyleExecutor(),
            new ScriptExecutor(),
            new AnimationScriptExecutor(),
            new LightExecutor(),
            new ScreenTransformExecutor(),
            new MeshRendererExecutor(),
            new UISliderFillExecutor()
        ])
    }

    /**
     * @override
     */
    async doInit() {
        await super.doInit()
        const world = World.get()
        const window = Window.get()
        window.setSize(world.getResolution())
        world.getPhysicsManager().init()
    }

}

export default GameLoop