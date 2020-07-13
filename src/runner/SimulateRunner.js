define(function (require) {

    const { MouseButton } = require('../core/Mouse.js')
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
            } else if (appState.hasState('SIMULATE_STOP')) {
                this.isPhysicsLoaded = false
                this.physics.stop()
                appState.removeState('SIMULATE_STOP')
            }
            //debug
            if(mouse.isButtonPressed(MouseButton.MIDDLE)){
                console.log(this.physics.physicsEngine.getBodies())
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