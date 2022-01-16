import Runner from '../Runner.js'
import StateManager from '../../state/StateManager.js'
import World from '../../world/World.js'
import Storage from '../../core/Storage.js'
import {PREVIEW_URL} from '../../core/Constant.js'

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
        this.isLoading = false
        this.isSimulating = false
        this.windowInstance = null
    }

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * Execute start/stop simulation
     */
    execute() {
        const stateManager = StateManager.get()
        const storage = Storage.get()
        if (stateManager.isStart(this.STATE)) {
            if (!this.isLoading) {
                if (!this.isSimulating) {
                    this.start(storage, stateManager)
                } else {
                    stateManager.stopNextState(this.STATE)
                }
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
    start(storage, stateManager) {
        const world = World.get()
        const size = world.getResolution()
        this.isLoading = true
        storage.saveLocal(Storage.type.WORLD, world).then(() => {
            this.isLoading = false
            this.isSimulating = true
            stateManager.progressNextState(this.STATE)
            this.windowInstance = window.open(
                PREVIEW_URL,
                '_blank',
                `width=${size.width},height=${size.height}`)
        })
    }

    progress(stateManager) {
        if (this.windowInstance && this.windowInstance.closed) {
            stateManager.stopNextState(this.STATE)
        }
    }

    /**
     * Stop the simulation
     * @param {Storage} storage
     * @param {StateManager} stateManager
     */
    stop(storage, stateManager) {
        this.windowInstance && this.windowInstance.close()
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