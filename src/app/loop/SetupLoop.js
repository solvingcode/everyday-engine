import Loop from './Loop.js'
import SetupRenderer from '../renderer/SetupRenderer.js'
import Menu from '../layout/Menu.js'
import MenuRunner from '../runner/menu/MenuRunner.js'
import SimulateRunner from '../runner/simulate/SimulateRunner.js'
import ActionRunner from '../runner/action/ActionRunner.js'
import WindowRunner from '../runner/window/WindowRunner.js'
import EditorRunner from '../runner/editor/EditorRunner.js'
import Storage from '../core/Storage.js'
import ExecutorRegistry from '../executor/ExecutorRegistry.js'
import MeshGenerationExecutor from '../executor/type/MeshGenerationExecutor.js'
import GUIPropertyExecutor from '../executor/type/GUIPropertyExecutor.js'
import {SetupRenderRunner} from '../runner/renderer/SetupRenderRunner.js'
import {SetupExecutorRunner} from '../runner/executor/SetupExecutorRunner.js'
import ScriptEditorRunner from '../runner/editor/ScriptEditorRunner.js'
import UnitDrawerRunner from '../runner/drawer/UnitDrawerRunner.js'
import GraphDrawerRunner from '../runner/drawer/GraphDrawerRunner.js'
import WorldInitializeRunner from '../runner/world/WorldInitializeRunner.js'
import FormRunner from '../runner/form/FormRunner.js'
import CameraExecutor from '../executor/type/CameraExecutor.js'
import LightExecutor from '../executor/type/LightExecutor.js'
import LightRunner from '../runner/light/LightRunner.js'
import TransformExecutor from '../executor/type/TransformExecutor.js'
import UIContainerExecutor from '../executor/type/UIContainerExecutor.js'
import MeshExecutor from '../executor/type/MeshExecutor.js'
import MeshStyleExecutor from '../executor/type/MeshStyleExecutor.js'
import UITransformExecutor from '../executor/type/UITransformExecutor.js'
import UIButtonStyleExecutor from '../executor/type/UIButtonStyleExecutor.js'
import {ShortcutRunner} from '../runner/shortcut/ShortcutRunner.js'
import TileEditorRunner from '../runner/editor/TileEditorRunner.js'
import TileMapExecutor from '../executor/type/TileMapExecutor.js'
import TileColliderExecutor from '../executor/type/TileColliderExecutor.js'
import AssetRunner from '../runner/asset/AssetRunner.js'
import AnimationEditorExecutor from '../executor/type/AnimationEditorExecutor.js'
import LayerExecutor from '../executor/type/LayerExecutor.js'
import EditorSceneRunner from '../runner/scene/EditorSceneRunner.js'
import {GarbageRunner} from '../runner/unit/GarbageRunner.js'

/**
 * @class {SetupLoop}
 * @extends {Loop}
 */
class SetupLoop extends Loop {

    /**
     * @type {SetupLoop}
     */
    static instance

    /**
     * Pay attention to the order of runners, because some runners can interrupt/affect the execution of the next runner
     * Example: SetupExecutorRunner must be before SetupRenderRunner
     */
    constructor() {
        super()
        this.setupRenderer = SetupRenderer.get()
        this.runners = [
            WorldInitializeRunner, /*HistoryRunner,*/ SimulateRunner, ActionRunner, EditorRunner, ScriptEditorRunner,
            TileEditorRunner, MenuRunner, SetupExecutorRunner, SetupRenderRunner, WindowRunner,
            GraphDrawerRunner, UnitDrawerRunner, FormRunner, LightRunner, EditorSceneRunner, ShortcutRunner, AssetRunner,
            GarbageRunner
        ]
        ExecutorRegistry.get().register([
            new CameraExecutor(),
            new AnimationEditorExecutor(),
            new UIContainerExecutor(),
            new MeshExecutor(),
            new TransformExecutor(),
            new UITransformExecutor(),
            new MeshGenerationExecutor(),
            new MeshStyleExecutor(),
            new GUIPropertyExecutor(),
            new LightExecutor(),
            new UIButtonStyleExecutor(),
            new TileColliderExecutor(),
            new TileMapExecutor(),
            new LayerExecutor(),
        ])
    }

    /**
     * @override
     */
    async doInit() {
        Storage.get().reset()
    }

    /**
     * @override
     */
    loop() {
        const menu = Menu.get()
        menu.update()
        this.setupRenderer.render(menu)
    }

}

export default SetupLoop