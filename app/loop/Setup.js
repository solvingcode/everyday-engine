define(function (require) {

    const Loop = require('./Loop.js')
    const SetupRenderer = require('../renderer/SetupRenderer.js')
    const Menu = require('../layout/Menu.js')
    const MenuRunner = require('../runner/menu/MenuRunner.js')
    const DrawerRunner = require('../runner/drawer/DrawerRunner.js')
    const SimulateRunner = require('../runner/simulate/SimulateRunner.js')
    const ActionRunner = require('../runner/action/ActionRunner.js')
    const WindowRunner = require('../runner/window/WindowRunner.js')
    const WorldRunner = require('../runner/world/WorldRunner.js')

    /**
     * @class {Setup}
     * @extends {Loop}
     */
    class Setup extends Loop{

        /**
         * @type {Setup}
         */
        static instance

        constructor() {
            super()
            this.setupRenderer = new SetupRenderer()
            this.runners = [SimulateRunner, ActionRunner, WorldRunner, MenuRunner, WindowRunner, DrawerRunner]
        }

        /**
         * @override
         */
        async init(){
            //not needed
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

    return Setup

})