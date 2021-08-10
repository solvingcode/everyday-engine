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
import GUISelectionExecutor from '../executor/type/GUISelectionExecutor.js'
import GUIPropertyExecutor from '../executor/type/GUIPropertyExecutor.js'
import {SetupRenderRunner} from '../runner/renderer/SetupRenderRunner.js'
import {SetupExecutorRunner} from '../runner/executor/SetupExecutorRunner.js'
import ScriptEditorRunner from '../runner/editor/ScriptEditorRunner.js'
import UnitDrawerRunner from '../runner/drawer/UnitDrawerRunner.js'
import GraphDrawerRunner from '../runner/drawer/GraphDrawerRunner.js'
import AnimationEditorRunner from '../runner/editor/AnimationEditorRunner.js'
import WorldInitializeRunner from '../runner/world/WorldInitializeRunner.js'
import FormRunner from '../runner/form/FormRunner.js'
import MoveUnitRunner from '../runner/editor/MoveUnitRunner.js'
import CameraExecutor from '../executor/type/CameraExecutor.js'
import LightExecutor from '../executor/type/LightExecutor.js'
import LightRunner from '../runner/light/LightRunner.js'
import SceneRunner from '../runner/scene/SceneRunner.js'
import TransformExecutor from '../executor/type/TransformExecutor.js'

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
            AnimationEditorRunner, MenuRunner, SetupExecutorRunner, SetupRenderRunner, WindowRunner, GraphDrawerRunner,
            UnitDrawerRunner, FormRunner, MoveUnitRunner, LightRunner, SceneRunner
        ]
        ExecutorRegistry.get().register([
            new TransformExecutor(),
            new MeshGenerationExecutor(),
            new GUISelectionExecutor(),
            new GUIPropertyExecutor(),
            new CameraExecutor(),
            new LightExecutor()
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