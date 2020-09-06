define(function () {

    class AppState {

        constructor() {
            this.state = []
        }

        /**
         * Get the state of the application (drawing ellipse, 
         * starting/pausing simulation, moving object, ...).
         */
        getState() {
            return this.state
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
         */
        addState(state) {
            if (this.state.indexOf(state) === -1) {
                if (AppState.States.indexOf(state) >= 0) {
                    this.state.push(state)
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
        removeAllState(){
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
            this.removeState(stateGroup, false)
            this.addState(`${stateGroup}_${type}`)
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
    AppState.States = [
        'TO_DRAW_ELLIPSE',
        'TO_DRAW_RECT',
        'TO_DRAW_LINE',
        'TO_DRAW_JOINT',
        'TO_DRAW_ATTACH_JOINT',
        'TO_DRAW_SELECT',
        'TO_DRAW_POLY',
        'TO_DRAW_CIRCLE',
        'DRAWING_ELLIPSE',
        'DRAWING_CIRCLE',
        'DRAWING_RECT',
        'DRAWING_LINE',
        'DRAWING_JOINT',
        'DRAWING_ATTACH_JOINT',
        'DRAWING_POLY',
        'DRAWING_SELECT',
        'SIMULATE_START',
        'SIMULATE_STOP'
    ]

    return AppState
})