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
        isStartAction(type){
            return this.appState.hasState(`ACTION_${type}_START`)
        }

        /**
         * Is the action type a stop action
         * @param {string} type
         */
        isStopAction(type){
            return this.appState.hasState(`ACTION_${type}_STOP`)
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
            const state = `ACTION_${type}_START`
            this.appState.addState(state)
            this.appState.setDataByTopic(state, [{id, ...data}])
        }

        /**
         * Stop an action (state)
         * @param {string} type
         */
        stopAction(type){
            const state = `ACTION_${type}_STOP`
            const data = this.getStartActionData(type)
            if(data){
                this.appState.addState(state)
                this.appState.setData({[state]: [data]})
                this.removeStartActionData(type)
            }else{
                this.appState.setUniqStateByGroup('ACTION', `${type}_STOP`)
            }
        }

        /**
         * Delete the stop action (end action)
         * @param {string} type
         */
        endAction(type){
            const state = `ACTION_${type}_STOP`
            this.appState.removeState(state)
            this.removeStopActionData(type)
        }

        /**
         * Is state has action of given type/id
         * @param {string} type
         * @param {number} id
         * @return {boolean}
         */
        hasAction(type, id){
            return (this.isStartAction(type) || this.isStopAction(type))
                    && (this.getDataById(`ACTION_${type}_START`, id)
                    || this.getDataById(`ACTION_${type}_STOP`, id))

        }

        /**
         * Get the start action data
         * @param {string} type
         * @return {Object|null}
         */
        getStartActionData(type){
            if(this.isStartAction(type)){
                const state = `ACTION_${type}_START`
                return this.getNextData(state)
            }
            return null
        }

        /**
         * Remove the start action data
         * @param {string} type
         */
        removeStartActionData(type){
            if(this.isStartAction(type)){
                const state = `ACTION_${type}_START`
                const data = this.getData(state)
                data && data.splice(0, 1)
            }
        }

        /**
         * Remove the start action data
         * @param {string} type
         */
        removeStopActionData(type){
            if(this.isStartAction(type)){
                const state = `ACTION_${type}_STOP`
                const data = this.getData(state)
                data && data.splice(0, 1)
            }
        }

        /**
         * Get the start action data
         * @param {string} type
         * @return {Object|null}
         */
        getStopActionData(type){
            if(this.isStopAction(type)){
                const state = `ACTION_${type}_STOP`
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
            return data && data.find(value => value.id === id)
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