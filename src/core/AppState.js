define(function (require) {

    const History = require('./History.js')

    class AppState {

        constructor() {
            this.state = []
            this.data = {}
        }

        /**
         * Get the state of the application (drawing ellipse, 
         * starting/pausing simulation, moving object, ...).
         */
        getState() {
            return this.state
        }

        /**
         * Get all data associated to a topic.
         * Used to access data related to a state
         * @param {String} topic 
         */
        getData(topic) {
            return this.data && this.data[topic]
        }

        /**
         * Set data associated to a topic.
         * Used to set data for a given state
         * @param {String} topic 
         */
        setData(topic, data) {
            this.data[topic] = data
            return this
        }

        /**
         * Verify if Application has a state.
         * @param {String[]} state 
         */
        hasState(state) {
            return this.state.indexOf(state) >= 0
        }

        /**
         * Add a state to the states list.
         * @param {AppState.States} state 
         * @param {Boolean} isHistory
         */
        addState(state, isHistory = true) {
            if (this.state.indexOf(state) === -1) {
                if (Object.keys(AppState.States).indexOf(state) >= 0) {
                    this.state.push(state)
                    if (AppState.States[state].history && isHistory) {
                        History.get().push()
                    }
                } else {
                    throw `${state} is not recognized as Application State`
                }
            }
        }

        /**
         * Find all indices for a specific state or state pattern, use exact param to search for
         * state within the same pattern
         * @param {String} state 
         * @param {Boolean} exact 
         */
        findStateIndex(state, exact = true) {
            var indices = []
            if (exact) {
                const index = this.state.indexOf(state)
                if (index >= 0) {
                    indices.push(index)
                }
            } else {
                const regExpState = new RegExp(`^${state}`)
                this.state.map(
                    (state_, index) => state_.match(regExpState) && indices.push(index)
                )
            }
            return indices
        }

        /**
         * Remove a state from the application, use exact param to search for
         * state within the same pattern
         * @param {String} state 
         * @param {Boolean} exact 
         */
        removeState(state, exact = true) {
            const indices = this.findStateIndex(state, exact)
            indices.map((index) => this.state.splice(index, 1))
        }

        /**
         * Remove all states from the application
         */
        removeAllState() {
            this.state = []
        }

        /**
         * Set an uniq state for a specific group (
         * Remove all state which contains the same prefix
         * value and add the new state to the same group.
         * @param {String} stateGroup 
         * @param {String} type 
         */
        setUniqStateByGroup(stateGroup, type) {
            const state = `${stateGroup}_${type}`
            const isHistory = !(this.findStateIndex(state, true).length)
            this.removeState(stateGroup, false)
            this.addState(state, isHistory)
        }

        /**
         * Reset the state of the application
         */
        reset() {
            this.state = []
        }

        static get() {
            if (!AppState.instance) {
                AppState.instance = new AppState()
            }
            return AppState.instance
        }
    }

    AppState.instance = null
    AppState.States = {
        'TO_DRAW_ELLIPSE': { history: false },
        'TO_DRAW_RECT': { history: false },
        'TO_DRAW_LINE': { history: false },
        'TO_DRAW_JOINT': { history: false },
        'TO_DRAW_ATTACH_JOINT': { history: false },
        'TO_DRAW_ATTACH_POINT': { history: false },
        'TO_DRAW_SELECT': { history: false },
        'TO_DRAW_POLY': { history: false },
        'TO_DRAW_CIRCLE': { history: false },
        'DRAWING_ELLIPSE': { history: true },
        'DRAWING_CIRCLE': { history: true },
        'DRAWING_RECT': { history: true },
        'DRAWING_LINE': { history: true },
        'DRAWING_JOINT': { history: true },
        'DRAWING_ATTACH_JOINT': { history: true },
        'DRAWING_ATTACH_POINT': { history: true },
        'DRAWING_POLY': { history: true },
        'DRAWING_SELECT': { history: false },
        'SIMULATE_START': { history: false },
        'SIMULATE_STOP': { history: false },
        'SIMULATE_PROGRESS': { history: false },
        'ACTION_DELETE_START': { history: true },
        'ACTION_DELETE_STOP': { history: false },
        'ACTION_DUPLICATE_START': { history: true },
        'ACTION_DUPLICATE_STOP': { history: false },
        'ACTION_UNDO_START': { history: false },
        'ACTION_UNDO_STOP': { history: false },
        'ACTION_MOVE_START': { history: true },
        'ACTION_MOVE_STOP': { history: false }
    }

    AppState.Topics = {
        COLOR: 'color'
    }

    return AppState
})