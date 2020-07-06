define(function (require) {

    const Runner = require('./Runner.js')
    const AppState = require('../core/AppState.js')
    const Physics = require('../physics/Physics.js')
    const MatterEngine = require('../physics/engine/MatterEngine.js')

    class SimulateRunner extends Runner {

        constructor() {
            super()
            this.currentEntity = null
            this.physics = new Physics(new MatterEngine())
            this.isPhysicsLoaded = false
        }

        /**
         * Execute start/stop simulation
         * @param {Mouse} mouse 
         */
        execute(mouse) {
            const appState = AppState.get()
            if (appState.hasState('SIMULATE_START')) {
                if (!this.isPhysicsLoaded) {
                    this.physics.run()
                    this.isPhysicsLoaded = true
                }
                this.physics.update()
            }
        }

        static get() {
            if (!SimulateRunner.instance) {
                SimulateRunner.instance = new SimulateRunner()
            }
            return SimulateRunner.instance
        }
    }

    SimulateRunner.instance = null

    return SimulateRunner
})