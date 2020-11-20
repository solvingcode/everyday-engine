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
         * Is the action type a start action
         * @param {string} type
         */
        isStart(type){
            return this.appState.hasState(`${type}_START`)
        }

        /**
         * Is the action type a stop action
         * @param {string} type
         */
        isStop(type){
            return this.appState.hasState(`${type}_STOP`)
        }

        /**
         * Start an action by type and data (state)
         * @param {string} type
         * @param {number} id
         * @param {Object} data
         */
        startAction(type, id,  data = {}){
            if(!id){
                throw new TypeError('Action id must be defined')
            }
            const state = `${type}_START`
            this.appState.addState(state)
            this.appState.setDataByTopic(state, [{id, ...data}])
        }

        /**
         * Stop an action (state)
         * @param {string} type
         */
        stopAction(type){
            const state = `${type}_STOP`
            const data = this.getStartData(type)
            this.appState.addState(state)
            this.appState.setData({[state]: [data]})
            this.removeStartData(type)
        }

        /**
         * Delete the stop action (end action)
         * @param {string} type
         */
        endAction(type){
            const state = `${type}_STOP`
            this.appState.removeState(state)
            this.removeStopData(type)
        }

        /**
         * Is state has action of given type/id
         * @param {string} type
         * @param {number} id
         * @return {boolean}
         */
        hasAction(type, id){
            return (this.isStart(type) || this.isStop(type))
                    && (this.getDataById(`${type}_START`, id)
                    || this.getDataById(`${type}_STOP`, id))

        }

        /**
         * Get the start action data
         * @param {string} type
         * @return {Object|null}
         */
        getStartData(type){
            if(this.isStart(type)){
                const state = `${type}_START`
                return this.getNextData(state)
            }
            return null
        }

        /**
         * Remove the start action data
         * @param {string} type
         */
        removeStartData(type){
            if(this.isStart(type)){
                const state = `${type}_START`
                const data = this.getData(state)
                data && data.splice(0, 1)
                if(data && !data.length){
                    this.appState.removeState(state)
                }
            }
        }

        /**
         * Remove the start action data
         * @param {string} type
         */
        removeStopData(type){
            if(this.isStart(type)){
                const state = `${type}_STOP`
                const data = this.getData(state)
                data && data.splice(0, 1)
            }
        }

        /**
         * Get the start action data
         * @param {string} type
         * @return {Object|null}
         */
        getStopData(type){
            if(this.isStop(type)){
                const state = `${type}_STOP`
                return this.getNextData(state)
            }
            return null
        }

        /**
         * Get the data by elementId
         * @param {string} type
         * @param {number} id
         */
        getDataById(type, id){
            const data = this.getData(type)
            return data && data.find(value => value && value.id === id)
        }

        /**
         * Get the data state for the given type
         * @param {string} type
         * @return {Array}
         */
        getData(type){
            return this.appState.getData(type)
        }

        /**
         * Get the next data state for the given type
         * @param {string} type
         * @return {Object}
         */
        getNextData(type){
            const data = this.getData(type)
            return data && data[0]
        }

        /**
         * Start the drawing (state)
         * @param {string} itemToDraw
         */
        startDraw(itemToDraw){
            this.appState.setUniqStateByGroup('TO_DRAW', itemToDraw)
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