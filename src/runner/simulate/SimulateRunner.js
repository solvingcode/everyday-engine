define(function (require) {

    const { MouseButton } = require('../../core/Mouse.js')
    const Runner = require('../Runner.js')
    const AppState = require('../../core/AppState.js')
    const Physics = require('../../physics/Physics.js')
    const MatterEngine = require('../../physics/engine/matter/Engine.js')
    const EntitySelector = require('../../world/manager/EntitySelector.js')
    const EntityManager = require('../../world/manager/EntityManager.js')
    const Storage = require('../../core/Storage.js')
    const GeneticEngine = require('../../ai/genetic/GeneticEngine.js')

    class SimulateRunner extends Runner {

        constructor() {
            super()
            this.currentEntity = null
            this.physics = new Physics(new MatterEngine())
            this.aiEngine = new GeneticEngine()
            this.isPhysicsLoaded = false
        }

        /**
         * Execute start/stop simulation
         * @param {Mouse} mouse 
         */
        execute(mouse) {
            const appState = AppState.get()
            const entityManager = EntityManager.get()
            const storage = Storage.get()
            if (appState.hasState('SIMULATE_START')) {
                storage.update(Storage.type.ENTITY, entityManager.entities)
                EntitySelector.get().unselectAll()
                if (!this.isPhysicsLoaded) {
                    this.physics.run()
                    this.isPhysicsLoaded = true
                }
                appState.setUniqStateByGroup('SIMULATE', 'PROGRESS')
            } else if (appState.hasState('SIMULATE_PROGRESS')) {
                this.physics.update(this.aiEngine)
            } else if (appState.hasState('SIMULATE_STOP')) {
                entityManager.entities = storage.fetch(Storage.type.ENTITY)
                this.isPhysicsLoaded = false
                this.physics.stop()
                appState.removeState('SIMULATE_STOP')
            }
            //debug
            if (mouse.isButtonPressed(MouseButton.MIDDLE)) {
                console.log(appState)
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