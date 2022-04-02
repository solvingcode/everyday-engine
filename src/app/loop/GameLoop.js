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
import CameraRunner from '../runner/camera/CameraRunner.js'
import CameraExecutor from '../executor/type/CameraExecutor.js'
import LightExecutor from '../executor/type/LightExecutor.js'
import LightRunner from '../runner/light/LightRunner.js'
import GameSceneRunner from '../runner/scene/GameSceneRunner.js'
import TransformExecutor from '../executor/type/TransformExecutor.js'
import MeshExecutor from '../executor/type/MeshExecutor.js'
import MeshRendererExecutor from '../executor/type/MeshRendererExecutor.js'
import ScreenTransformExecutor from '../executor/type/ScreenTransformExecutor.js'
import UITransformExecutor from '../executor/type/UITransformExecutor.js'
import UIButtonInteractionExecutor from '../executor/type/UIButtonInteractionExecutor.js'
import UISliderHandleExecutor from '../executor/type/UISliderHandleExecutor.js'
import UISliderFillExecutor from '../executor/type/UISliderFillExecutor.js'
import AnimationPlayerExecutor from '../executor/type/AnimationPlayerExecutor.js'
import UIButtonStyleExecutor from '../executor/type/UIButtonStyleExecutor.js'
import LayerExecutor from '../executor/type/LayerExecutor.js'
import {GarbageRunner} from '../runner/unit/GarbageRunner.js'
import EEScriptExecutor from '../executor/type/EEScriptExecutor.js'
import EEScriptInitExecutor from '../executor/type/EEScriptInitExecutor.js'
import EEAnimationScriptExecutor from '../executor/type/EEAnimationScriptExecutor.js'
import WorldGameInitializeRunner from '../runner/world/WorldGameInitializeRunner.js'

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
            WorldGameInitializeRunner, GameSceneRunner, CameraRunner, PhysicsRunner,
            GameExecutorRunner, LightRunner, GarbageRunner]
        ExecutorRegistry.get().register([
            new CameraExecutor(),
            new AnimationPlayerExecutor(),
            new MeshExecutor(),
            new TransformExecutor(),
            new UITransformExecutor(),
            new UIButtonInteractionExecutor(),
            new UIButtonStyleExecutor(),
            new UISliderHandleExecutor(),
            new MeshGenerationExecutor(),
            new RigidBodyExecutor(),
            new ColliderExecutor(),
            new MeshStyleExecutor(),
            new EEScriptInitExecutor(),
            new EEScriptExecutor(),
            new EEAnimationScriptExecutor(),
            new LightExecutor(),
            new ScreenTransformExecutor(),
            new MeshRendererExecutor(),
            new UISliderFillExecutor(),
            new LayerExecutor()
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