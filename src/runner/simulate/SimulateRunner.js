define(function (require) {

    const {MouseButton} = require('../../core/Mouse.js')
    const Runner = require('../Runner.js')
    const StateManager = require('../../state/StateManager.js')
    const World = require('../../world/World.js')
    const EntitySelector = require('../../world/manager/EntitySelector.js')
    const EntityManager = require('../../world/manager/EntityManager.js')
    const Storage = require('../../core/Storage.js')

    class SimulateRunner extends Runner {

        /**
         * @const
         * @type {string}
         */
        STATE = 'SIMULATE'

        /**
         * @type {SimulateRunner}
         */
        static instance = null

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
            const stateManager = StateManager.get()
            const entityManager = EntityManager.get()
            const storage = Storage.get()
            if (stateManager.isStart(this.STATE)) {
                this.start(storage, entityManager, stateManager)
            } else if (stateManager.isProgress(this.STATE)) {
                this.progress()
            } else if (stateManager.isStop(this.STATE)) {
                this.stop(storage, entityManager, stateManager)
            }
            //debug
            if (mouse.isButtonPressed(MouseButton.MIDDLE)) {
                console.log(stateManager)
            }
        }

        /**
         * Start the simulation
         * @param {Storage} storage
         * @param {EntityManager} entityManager
         * @param {StateManager} stateManager
         */
        start(storage, entityManager, stateManager) {
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
                    stateManager.stopState(this.STATE)
                }
            }
            stateManager.progressState(this.STATE)
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
         * @param {Storage} storage
         * @param {EntityManager} entityManager
         * @param {StateManager} stateManager
         */
        stop(storage, entityManager, stateManager) {
            stateManager.endState(this.STATE)
            const world = World.get()
            entityManager.entities = storage.fetch(Storage.type.ENTITY)
            entityManager.entities.map(entity => entity.regenerate())
            this.isPhysicsLoaded = false
            world.getPhysics().stop()
            world.resetCamera()
        }

        static get() {
            if (!SimulateRunner.instance) {
                SimulateRunner.instance = new SimulateRunner()
            }
            return SimulateRunner.instance
        }
    }

    return SimulateRunner
})