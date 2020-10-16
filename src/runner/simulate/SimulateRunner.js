define(function (require) {

    const { MouseButton } = require('../../core/Mouse.js')
    const Runner = require('../Runner.js')
    const AppState = require('../../core/AppState.js')
    const World = require('../../world/World.js')
    const EntitySelector = require('../../world/manager/EntitySelector.js')
    const EntityManager = require('../../world/manager/EntityManager.js')
    const Storage = require('../../core/Storage.js')

    class SimulateRunner extends Runner {

        constructor() {
            super()
            this.currentEntity = null
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
                console.log(appState, this.physics.physicsEngine.getBodies())
            }
        }

        /**
         * Start the simulation
         */
        start(storage, entityManager, appState) {
            const world = World.get()
            EntitySelector.get().unselectAll()
            storage.update(Storage.type.ENTITY, entityManager.entities)
            world.getAiEngine().init()
            if (!this.isPhysicsLoaded) {
                try {
                    world.getPhysics().run()
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
        progress() {
            const world = World.get()
            world.getPhysics().update(world.getAiEngine())
            world.updateCamera()
        }

        /**
         * Stop the simulation
         */
        stop(storage, entityManager, appState) {
            const world = World.get()
            entityManager.entities = storage.fetch(Storage.type.ENTITY)
            entityManager.entities.map(entity => entity.regenerate())
            this.isPhysicsLoaded = false
            world.getPhysics().stop()
            world.resetCamera()
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