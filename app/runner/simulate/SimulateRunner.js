define(function (require) {

    import Runner from '../Runner.js'
    import StateManager from '../../state/StateManager.js'
    import World from '../../world/World.js'
    import Storage from '../../core/Storage.js'

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
            this.isSimulating = false
            this.windowInstance = null
        }

        /**
         * @override
         */
        isHandle(window){
            return true
        }

        /**
         * Execute start/stop simulation
         * @param {Mouse} mouse
         */
        execute(mouse) {
            const stateManager = StateManager.get()
            const storage = Storage.get()
            if (stateManager.isStart(this.STATE)) {
                if(!this.isSimulating){
                    this.start(storage, stateManager)
                }else{
                    stateManager.stopNextState(this.STATE)
                }
            } else if (stateManager.isProgress(this.STATE)) {
                this.progress(stateManager)
            } else if (stateManager.isStop(this.STATE)) {
                this.stop(storage, stateManager)
            }
        }

        /**
         * Start the simulation
         * @param {Storage} storage
         * @param {StateManager} stateManager
         */
        async start(storage, stateManager) {
            await storage.saveLocal(Storage.type.WORLD, World.get())
            this.isSimulating = true
            stateManager.progressNextState(this.STATE)
            this.windowInstance = window.open(
                '/preview/',
                '_blank',
                `width=${SCENE_WIDTH},height=${SCENE_HEIGHT}`)
        }

        progress(stateManager){
            if(this.windowInstance.closed){
                stateManager.stopNextState(this.STATE)
            }
        }

        /**
         * Stop the simulation
         * @param {Storage} storage
         * @param {StateManager} stateManager
         */
        stop(storage, stateManager) {
            this.windowInstance.close()
            this.isSimulating = false
            stateManager.endNextState(this.STATE)
        }

        static get() {
            if (!this.instance) {
                this.instance = new this()
            }
            return this.instance
        }
    }

    export default SimulateRunner
})