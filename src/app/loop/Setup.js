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
import HistoryRunner from '../runner/history/HistoryRunner.js'
import UnitDrawerRunner from '../runner/drawer/UnitDrawerRunner.js'
import GraphDrawerRunner from '../runner/drawer/GraphDrawerRunner.js'
import AnimationEditorRunner from '../runner/editor/AnimationEditorRunner.js'

/**
 * @class {Setup}
 * @extends {Loop}
 */
class Setup extends Loop {

    /**
     * @type {Setup}
     */
    static instance

    /**
     * Pay attention to the order of runners, because some runners can interrupt/affect the execution of the next runner
     * Example: SetupExecutorRunner must be before SetupRenderRunner, and MenuRunner will cancel the execution of the
     * next runners if a menu item was clicked
     */
    constructor() {
        super()
        this.setupRenderer = SetupRenderer.get()
        this.runners = [
            HistoryRunner, SimulateRunner, ActionRunner, EditorRunner, ScriptEditorRunner, AnimationEditorRunner,
            SetupExecutorRunner, SetupRenderRunner, MenuRunner, WindowRunner, GraphDrawerRunner, UnitDrawerRunner
        ]
        ExecutorRegistry.get().register([
            new MeshGenerationExecutor(),
            new GUISelectionExecutor(),
            new GUIPropertyExecutor()
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

export default Setup