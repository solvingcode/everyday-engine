define(function (require) {

    const { MouseButton } = require('../../core/Mouse.js')
    const Runner = require('../Runner.js')
    const AppState = require('../../core/AppState.js')
    const Physics = require('../../physics/Physics.js')
    const World = require('../../world/World.js')
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
                this.start(storage, entityManager, appState)
            } else if (appState.hasState('SIMULATE_PROGRESS')) {
                this.progress()
            } else if (appState.hasState('SIMULATE_STOP')) {
                this.stop(storage, entityManager, appState)
            }
            //debug
            if (mouse.isButtonPressed(MouseButton.MIDDLE)) {
                console.log(appState)
            }
        }

        /**
         * Start the simulation
         */
        start(storage, entityManager, appState){
            storage.update(Storage.type.ENTITY, entityManager.entities)
            EntitySelector.get().unselectAll()
            if (!this.isPhysicsLoaded) {
                try {
                    this.physics.run()
                    this.isPhysicsLoaded = true
                } catch (error) {
                    console.warn(error)
                    appState.removeState('SIMULATE_START')
                }
            }
            appState.setUniqStateByGroup('SIMULATE', 'PROGRESS')
        }

        /**
         * Progress the simulation
         */
        progress(){
            this.physics.update(this.aiEngine)
            World.get().updateCamera()
        }
        
        /**
         * Stop the simulation
         */
        stop(storage, entityManager, appState){
            entityManager.entities = storage.fetch(Storage.type.ENTITY)
            this.isPhysicsLoaded = false
            this.physics.stop()
            World.get().resetCamera()
            appState.removeState('SIMULATE_STOP')
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