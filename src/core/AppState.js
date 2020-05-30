define(function () {

    class AppState {

        constructor() {
            this.state = []
        }

        /**
         * Get the state of the application (drawing circle, 
         * starting/pausing simulation, moving object, ...).
         */
        getState() {
            return this.state
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
        'TO_DRAW_CIRCLE'
    ]

    return AppState
})