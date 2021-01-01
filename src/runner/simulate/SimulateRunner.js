define(function (require) {

    const Runner = require('../Runner.js')
    const StateManager = require('../../state/StateManager.js')
    const World = require('../../world/World.js')
    const EntitySelector = require('../../world/manager/EntitySelector.js')
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
            this.isSimulating = false
        }

        /**
         * Execute start/stop simulation
         * @param {Mouse} mouse
         */
        execute(mouse) {
            const stateManager = StateManager.get()
            const entityManager = World.get().getEntityManager()
            const storage = Storage.get()
            if (stateManager.isStart(this.STATE)) {
                if(!this.isSimulating){
                    this.start(storage, entityManager, stateManager)
                }else{
                    stateManager.stopNextState(this.STATE)
                }
            } else if (stateManager.isProgress(this.STATE)) {
                this.progress()
            } else if (stateManager.isStop(this.STATE)) {
                this.stop(storage, entityManager, stateManager)
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
            const aiEngine = world.getAiEngine()
            EntitySelector.get().unselectAll(world)
            storage.update(Storage.type.ENTITY, entityManager.entities)
            aiEngine && aiEngine.init()
            if (!this.isPhysicsLoaded) {
                try {
                    world.getPhysics().run(entityManager)
                    this.isPhysicsLoaded = true
                    this.isSimulating = true
                } catch (error) {
                    console.warn(error)
                    stateManager.stopNextState(this.STATE)
                }
            }
            stateManager.progressNextState(this.STATE)
        }

        /**
         * Progress the simulation
         */
        progress() {
            const world = World.get()
            world.getPhysics().update(world.getEntityManager(), world.getAiEngine())
            world.updateCamera()
        }

        /**
         * Stop the simulation
         * @param {Storage} storage
         * @param {EntityManager} entityManager
         * @param {StateManager} stateManager
         */
        stop(storage, entityManager, stateManager) {
            stateManager.endNextState(this.STATE)
            const world = World.get()
            entityManager.entities = storage.fetch(Storage.type.ENTITY)
            entityManager.entities.map(entity => entity.regenerate())
            this.isPhysicsLoaded = false
            this.isSimulating = false
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