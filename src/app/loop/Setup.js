import Loop from './Loop.js'
import SetupRenderer from '../renderer/SetupRenderer.js'
import Menu from '../layout/Menu.js'
import MenuRunner from '../runner/menu/MenuRunner.js'
import DrawerRunner from '../runner/drawer/DrawerRunner.js'
import SimulateRunner from '../runner/simulate/SimulateRunner.js'
import ActionRunner from '../runner/action/ActionRunner.js'
import WindowRunner from '../runner/window/WindowRunner.js'
import WorldRunner from '../runner/world/WorldRunner.js'
import Storage from '../core/Storage.js'
import ExecutorRegistry from '../executor/ExecutorRegistry.js'
import MeshGenerationExecutor from '../executor/type/MeshGenerationExecutor.js'
import GUISelectionExecutor from '../executor/type/GUISelectionExecutor.js'
import GUIPropertyExecutor from '../executor/type/GUIPropertyExecutor.js'
import TabManager from '../manager/TabManager.js'

/**
 * @class {Setup}
 * @extends {Loop}
 */
class Setup extends Loop {

    /**
     * @type {Setup}
     */
    static instance

    constructor() {
        super()
        this.setupRenderer = new SetupRenderer()
        this.runners = [SimulateRunner, ActionRunner, WorldRunner, MenuRunner, WindowRunner, DrawerRunner]
        ExecutorRegistry.get().register([
            new MeshGenerationExecutor(),
            new GUISelectionExecutor(),
            new GUIPropertyExecutor()
        ])
        TabManager.get().create('Scene')
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