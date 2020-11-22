define(function (require) {

    const AppState = require('./AppState.js')

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
         * Is the state type a start action
         * @param {string} type
         */
        isStart(type) {
            return this.appState.hasState(`${type}_START`)
        }

        /**
         * Is the state type in progress
         * @param {string} type
         */
        isProgress(type) {
            return this.appState.hasState(`${type}_PROGRESS`)
        }

        /**
         * Is the action type a stop action
         * @param {string} type
         */
        isStop(type) {
            return this.appState.hasState(`${type}_STOP`)
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
            this.appState.addState(state)
            this.appState.setDataByTopic(state, [{id, ...data}])
        }

        /**
         * Progress an action (state)
         * @param {string} type
         * @TODO Add history (call addHistory(state))
         */
        progressState(type) {
            const state = `${type}_PROGRESS`
            const data = this.getStartData(type)
            this.appState.addState(state)
            this.appState.setData({[state]: [data]})
            this.removeStartState(type)
        }

        /**
         * Stop an action (state)
         * @param {string} type
         * @TODO Add history (call addHistory(state))
         */
        stopState(type) {
            const state = `${type}_STOP`
            const data = this.getProgressData(type)
            this.appState.addState(state)
            this.appState.setData({[state]: [data]})
            this.removeStartState(type)
            this.removeProgressState(type)
        }

        /**
         * Delete the stop action (end action)
         * @param {string} type
         */
        endState(type) {
            this.removeStopState(type)
        }

        /**
         * Is state has action of given type/id
         * @param {string} type
         * @param {number} id
         * @return {boolean}
         */
        hasState(type, id) {
            return (this.isStart(type) || this.isStop(type) || this.isProgress(type))
                && (this.getDataById(`${type}_START`, id)
                    || this.getDataById(`${type}_PROGRESS`, id)
                    || this.getDataById(`${type}_STOP`, id))
        }

        /**
         * Is running state is in progress
         */
        isRunning(){
            return this.isProgress('SIMULATE')
        }

        /**
         * Add data to history (state)
         * @param {string} state
         * @TODO check we can not pass an ID
         */
        addHistory(state) {
            const isHistory = this.appState.getIsHistory(state)
            if (isHistory) {
                this.startState('ACTION_HISTORY_PUSH', 1)
            }
        }

        /**
         * Get the start state data
         * @param {string} type
         * @return {Object|null}
         */
        getStartData(type) {
            return this.getStateData(`${type}_START`)
        }

        /**
         * Get the progress state data
         * @param {string} type
         * @return {Object|null}
         */
        getProgressData(type) {
            return this.getStateData(`${type}_PROGRESS`)
        }

        /**
         * Get the start state data
         * @param {string} type
         * @return {Object|null}
         */
        getStopData(type) {
            return this.getStateData(`${type}_STOP`)
        }

        /**
         * Remove the start state
         * @param {string} type
         */
        removeStartState(type){
            this.removeState(`${type}_START`)
        }

        /**
         * Remove the progress state
         * @param {string} type
         */
        removeProgressState(type){
            this.removeState(`${type}_PROGRESS`)
        }

        /**
         * Remove the stop state
         * @param {string} type
         */
        removeStopState(type){
            this.removeState(`${type}_STOP`)
        }

        /**
         * Get the data by elementId
         * @param {string} type
         * @param {number} id
         */
        getDataById(type, id) {
            const data = this.getData(type)
            return data && data.find(value => value && value.id === id)
        }

        /**
         * Get the data state for the given type
         * @param {string} state
         * @return {Array}
         */
        getData(state) {
            return this.appState.getData(state)
        }

        /**
         * Get the next data state for the given type
         * @param {string} state
         * @return {Object}
         */
        getNextData(state) {
            const data = this.getData(state)
            return data && data[0]
        }

        /**
         * Remove the state
         * @param {string} state
         */
        removeState(state){
            this.appState.removeState(state)
            this.removeStateData(state)
        }

        /**
         * Remove the state data
         * @param {string} state
         */
        removeStateData(state) {
            const data = this.getData(state)
            data && data.splice(0, 1)
            if(data && !data.length){
                this.appState.removeState(state)
                this.appState.removeData(state)
            }
        }

        /**
         * Get the state data
         * @param {string} state
         * @return {Object|null}
         */
        getStateData(state) {
            return this.getNextData(state)
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

    return StateManager
})