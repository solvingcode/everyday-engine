import Runner from '../Runner.js'
import StateManager from '../../state/StateManager.js'
import History from '../../core/History.js'

export default class HistoryRunner extends Runner {

    /**
     * @type {HistoryRunner}
     */
    static instance = null

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * @override
     */
    execute() {
        const stateManager = StateManager.get()
        const stopStatesWithHistory = stateManager.getStopStates().filter(state => stateManager.hasHistory(state))
        const startStatesWithHistory = stateManager.getStartStates().filter(state => stateManager.hasHistory(state))
        if(stopStatesWithHistory.length){
            History.get().save()
        }
        if(startStatesWithHistory.length){
            History.get().record()
        }
    }
}
