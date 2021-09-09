import AppState from './AppState.js'
import History from '../core/History.js'
import SystemError from '../exception/type/SystemError.js'

/**
 * Manage the state of the application
 * @property {AppState} appState
 */
class StateManager {

    /**
     * @type {StateManager}
     */
    static instance = null

    constructor() {
        this.appState = AppState.get()
    }

    /**
     * @param {string} state
     * @return {string|null}
     */
    getType(state) {
        const stepPrefix = ['START', 'PROGRESS', 'STOP']
        for (const iStep in stepPrefix) {
            if (stepPrefix.hasOwnProperty(iStep)) {
                const regex = new RegExp(`([A-Z_]+)_${stepPrefix[iStep]}$`)
                if (state.match(regex)) {
                    return state.replace(regex, '$1')
                }
            }
        }
        return null
    }

    /**
     * @param {string} state
     * @return {boolean}
     */
    isActionState(state) {
        const catMatch = new RegExp(`^${AppState.Categories.ACTION}`)
        return !!state.match(catMatch)
    }

    /**
     * @param {string} state
     * @return {boolean}
     */
    isConfirmState(state) {
        const catMatch = new RegExp(`^${AppState.Categories.CONFIRM}`)
        return !!state.match(catMatch)
    }

    /**
     * @param {string} state
     * @return {boolean}
     */
    isDrawState(state) {
        const catMatch = new RegExp(`^${AppState.Categories.DRAW}`)
        return !!state.match(catMatch)
    }

    /**
     * @param {string} state
     * @return {boolean}
     */
    isStartState(state) {
        return !!state.match(/_START$/)
    }

    /**
     * @param {string} state
     * @return {boolean}
     */
    isStopState(state) {
        return !!state.match(/_STOP$/)
    }

    /**
     * Is the state type a start action
     * @param {string} type
     */
    isStart(type) {
        return this.appState.hasState(`${type}_START`)
            && this.getNextStartData(type)
    }

    /**
     * Is the state type in progress
     * @param {string} type
     */
    isProgress(type) {
        return this.appState.hasState(`${type}_PROGRESS`)
            && this.getNextProgressData(type)
    }

    /**
     * Is the action type a stop action
     * @param {string} type
     */
    isStop(type) {
        return this.appState.hasState(`${type}_STOP`)
            && this.getNextStopData(type)
    }

    /**
     * Start an action by type and data (state)
     * @param {string} type
     * @param {number} id
     * @param {Object} data
     * @TODO Add history (call addHistory(state))
     */
    startState(type, id, data = {}) {
        if (!id) {
            throw new TypeError('Action id must be defined')
        }
        const state = `${type}_START`
        this.addState(state, null)
        this.appState.setDataByTopic(state, [{id, ...data}])
    }

    /**
     * Progress an action (state)
     * @param {string} type
     * @param {number} id
     * @TODO Add history (call addHistory(state))
     */
    progressState(type, id) {
        if (!id) {
            throw new TypeError('Action id must be defined')
        }
        const state = `${type}_PROGRESS`
        const data = this.getStartData(type, id)
        this.addState(state, data)
        this.removeStartState(type, id)
    }

    /**
     * Stop an action (state)
     * @param {string} type
     * @param {number} id
     * @TODO Add history (call addHistory(state))
     */
    stopState(type, id) {
        if (!id) {
            throw new TypeError('Action id must be defined')
        }
        const state = `${type}_STOP`
        const data = this.getProgressData(type, id)
        this.addState(state, data)
        this.removeStartState(type, id)
        this.removeProgressState(type, id)
    }

    /**
     * Delete the stop action (end action)
     * @param {string} type
     * @param {number} id
     */
    endState(type, id) {
        if (!id) {
            throw new TypeError('Action id must be defined')
        }
        this.removeProgressState(type, id)
        this.removeStopState(type, id)
    }

    /**
     * @param {string} type
     */
    progressNextState(type) {
        const data = this.getNextStartData(type)
        if (data) {
            this.progressState(type, data.id)
        } else {
            throw new TypeError(`Progress data state not found for ${type}`)
        }
    }

    /**
     * @param {string} type
     */
    stopNextState(type) {
        const data = this.getNextProgressData(type) || this.getNextStartData(type)
        if (data) {
            this.stopState(type, data.id)
        } else {
            throw new TypeError(`Stop data state not found for ${type}`)
        }
    }

    /**
     * @param {string} type
     */
    endNextState(type) {
        const data = this.getNextStopData(type)
        if (data) {
            this.endState(type, data.id)
        } else {
            throw new TypeError(`End data state not found for ${type}`)
        }
    }

    /**
     * Is state has action of given type/id
     * @param {string} type
     * @param {number} id
     * @return {boolean}
     */
    hasState(type, id) {
        return (this.isStart(type) || this.isStop(type) || this.isProgress(type))
            && (this.getStartData(type, id)
                || this.getProgressData(type, id)
                || this.getStartData(type, id))
    }

    /**
     * Is state has action of given type (even if state data is not set)
     * @param {string} type
     * @return {boolean}
     */
    hasAnyState(type) {
        return this.isStart(type) || this.isStop(type) || this.isProgress(type)
    }

    /**
     * @return {string[]}
     */
    getConfirmStates() {
        return this.appState.getState().filter(state => this.isConfirmState(state))
    }

    /**
     * @return {string[]}
     */
    getStartStates() {
        return this.appState.getState().filter(state => this.isStartState(state))
    }

    /**
     * @return {string[]}
     */
    getStopStates() {
        return this.appState.getState().filter(state => this.isStop(this.getType(state)))
    }

    /**
     * @param {string} state
     * @return {boolean}
     */
    hasHistory(state) {
        return this.appState.getIsHistory(state)
    }

    /**
     * Is running states in progress
     * @return {boolean}
     */
    isRunning() {
        return this.isProgress('SIMULATE')
    }

    /**
     * @return {boolean}
     */
    isFormUpdating() {
        return this.isProgress('ACTION_FORM_UPDATE')
    }

    /**
     * Add data to history (state)
     * @param {string} state
     * @TODO check we can not pass an ID
     */
    addHistory(state) {
        const isHistory = this.appState.getIsHistory(state)
        if (isHistory) {
            if (this.isStartState(state)) {
                History.get().record()
            } else if (this.isStopState(state)) {
                History.get().save()
            }
        }
    }

    /**
     * @param {string} state
     * @param {*} data
     */
    addState(state, data) {
        this.appState.addState(state)
        data && this.appState.setData({[state]: [data]})
    }

    /**
     * @param {string} state
     * @return {{state: string, data: *}}
     */
    confirmState(state){
        if (!this.isConfirmState(state)) {
            throw new SystemError(`${state} is not a confirm state`)
        }
        const nextState = state.replace(new RegExp(`^${AppState.Categories.CONFIRM}([A-Z_]+)_START`), '$1')
        const confirmData = this.getNextConfirmData(state)
        return {state: nextState, data: confirmData}
    }

    /**
     * Get the start state data
     * @param {string} type
     * @param {number} id
     * @return {*}
     */
    getStartData(type, id) {
        if (!id) {
            throw new TypeError('Action id must be defined')
        }
        return this.getStateData(`${type}_START`, id)
    }

    /**
     * Get the progress state data
     * @param {string} type
     * @param {number} id
     * @return {Object|null}
     */
    getProgressData(type, id) {
        if (!id) {
            throw new TypeError('Action id must be defined')
        }
        return this.getStateData(`${type}_PROGRESS`, id)
    }

    /**
     * Get the start state data
     * @param {string} type
     * @param {number} id
     * @return {Object|null}
     */
    getStopData(type, id) {
        if (!id) {
            throw new TypeError('Action id must be defined')
        }
        return this.getStateData(`${type}_STOP`, id)
    }

    /**
     * Get the next confirm state data
     * @param {string} state
     * @return {Object|null}
     */
    getNextConfirmData(state) {
        if (!this.isConfirmState(state)) {
            throw new SystemError(`${state} is not a confirm state`)
        }
        return this.getNextData(state)
    }

    /**
     * Get the next progress state data
     * @param {string} type
     * @return {Object|null}
     */
    getNextStartData(type) {
        return this.getNextData(`${type}_START`)
    }

    /**
     * Get the next progress state data
     * @param {string} type
     * @return {Object|null}
     */
    getNextProgressData(type) {
        return this.getNextData(`${type}_PROGRESS`)
    }

    /**
     * Get the next progress state data
     * @param {string} type
     * @return {Object|null}
     */
    getNextStopData(type) {
        return this.getNextData(`${type}_STOP`)
    }

    /**
     * Remove the start state
     * @param {string} type
     * @param {number} id
     */
    removeStartState(type, id) {
        this.removeState(`${type}_START`, id)
    }

    /**
     * Remove the progress state
     * @param {string} type
     * @param {number} id
     */
    removeProgressState(type, id) {
        this.removeState(`${type}_PROGRESS`, id)
    }

    /**
     * Remove the stop state
     * @param {string} type
     * @param {number} id
     */
    removeStopState(type, id) {
        this.removeState(`${type}_STOP`, id)
    }

    /**
     * Get the data by State/Id
     * @private
     * @param {string} type
     * @param {number} id
     */
    getDataById(type, id) {
        const data = this.getData(type)
        return data && data.find(value => value && value.id === id)
    }

    /**
     * Get the data state for the given type
     * @private
     * @param {string} state
     * @return {Array}
     */
    getData(state) {
        return this.appState.getData(state)
    }

    /**
     * Get the next data state for the given type
     * @private
     * @param {string} state
     * @return {Object}
     */
    getNextData(state) {
        const data = this.getData(state)
        return data && data[0]
    }

    /**
     * Remove the next state
     * @private
     * @param {string} state
     */
    removeNextState(state) {
        const data = this.getNextData(state)
        this.removeStateData(state, data.id)
    }

    /**
     * Remove the state
     * @private
     * @param {string} state
     * @param {number} id
     */
    removeState(state, id) {
        this.removeStateData(state, id)
    }

    /**
     * Remove the state data
     * @private
     * @param {string} state
     * @param {number} id
     */
    removeStateData(state, id) {
        const dataList = this.getData(state)
        const data = this.getDataById(state, id)
        if (data) {
            dataList.splice(dataList.indexOf(data), 1)
        }
        if (dataList && !dataList.length) {
            this.appState.removeState(state)
            this.appState.removeData(state)
        }
    }

    /**
     * Get the state data
     * @private
     * @param {string} state
     * @param {number} id
     * @return {Object|null}
     */
    getStateData(state, id) {
        return this.getDataById(state, id)
    }

    reset() {
        this.appState.reset()
    }

    /**
     * Search for all states and stop them all
     */
    stopAll() {
        this.stopStates(this.appState.getState())
    }

    /**
     * Search for all action states (Category ACTION) and stop them all
     */
    stopAllAction() {
        const states = this.appState.getState().filter(state =>
            this.hasAnyState(this.getType(state)) && this.isActionState(state))
        this.stopStates(states)
    }

    /**
     * @param {string[]} states
     */
    stopStates(states) {
        states.forEach(state => {
            const type = this.getType(state)
            type && this.stopNextState(type)
        })
    }

    removeConfirmStates() {
        const confirmStates = this.getConfirmStates()
        confirmStates.forEach(confirmState => {
            this.removeNextState(confirmState)
        })
    }

    /**
     * @return {StateManager}
     */
    static get() {
        if (!StateManager.instance) {
            StateManager.instance = new StateManager()
        }
        return StateManager.instance
    }
}

export default StateManager