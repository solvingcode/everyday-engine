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
            this.appState.addState(state)
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
            this.appState.addState(state)
            data && this.appState.setData({[state]: [data]})
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
            this.appState.addState(state)
            data && this.appState.setData({[state]: [data]})
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
         * Progress the next state
         * @param {string} type
         */
        progressNextState(type) {
            const data = this.getNextStartData(type)
            this.progressState(type, data.id)
        }

        /**
         * Stop the next state
         * @param {string} type
         */
        stopNextState(type) {
            const data = this.getNextProgressData(type)
            this.stopState(type, data.id)
        }

        /**
         * End the next state
         * @param {string} type
         */
        endNextState(type) {
            const data = this.getNextStopData(type)
            data && this.endState(type, data.id)
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
         * Is running states is in progress
         */
        isRunning() {
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
         * @param {number} id
         * @return {Object|null}
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