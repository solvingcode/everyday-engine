define(function () {
    /**
     * Define the mouse inputs (pressed, clicked, mouse position, ...)
     */
    class Mouse {
        constructor() {
            this.keydowns = []
            this.keyclicks = []
            this.keydbclicks = []
            this.position = { x: 0, y: 0 }
            this.target = null
            this.currentPosition = { x: 0, y: 0 }
            this.lastPosition = this.currentPosition
        }

        /**
         * @param {MouseEvent} event
         * @return {{x: number, y: number}}
         */
        getPosition(event) {
            return { x: event.clientX, y: event.clientY }
        }

        /**
         * @param {MouseEvent} event
         * @return {EventTarget}
         */
        getTarget(event) {
            return event.target
        }

        /**
         * @param {MouseEvent} event
         * @return {EventTarget[]}
         */
        getPath(event) {
            return event.composedPath()
        }

        /**
         * @param {number} key
         */
        setButtonPressed(key) {
            if (!this.isButtonPressed(key)) {
                this.keydowns.push(key)
            }
            this.position = this.getPosition(event)
            this.target = this.getTarget(event)
            this.path = this.getPath(event)
        }

        /**
         * @param {number} key
         */
        setButtonClicked(key) {
            if (!this.isButtonClicked(key)) {
                this.keyclicks.push(key)
            }
        }

        /**
         * @param {number} key
         */
        setButtonDoubleClicked(key) {
            if (!this.isButtonDoubleClicked(key)) {
                this.keydbclicks.push(key)
            }
        }

        /**
         * @param {number} key
         */
        setButtonReleased(key) {
            if (this.isButtonPressed(key)) {
                let index = this.keydowns.indexOf(key)
                this.keydowns.splice(index, 1)
            }
        }

        /**
         * Return the distance between the currentPosition and the position
         * of the mouse on the click
         * @returns {{x: number, y: number}}
         */
        getDragDistance() {
            const x = this.currentPosition.x - this.position.x
            const y = this.currentPosition.y - this.position.y
            return { x, y }
        }

        /**
         * @param {number} key
         * @return {Boolean}
         */
        isButtonPressed(key) {
            let index = this.keydowns.indexOf(key)
            return index !== -1
        }

        /**
         * @param {number} key
         * @return {Boolean}
         */
        isButtonClicked(key) {
            let index = this.keyclicks.indexOf(key)
            return index !== -1
        }

        /**
         * @param {number} key
         * @return {Boolean}
         */
        isButtonDoubleClicked(key) {
            let index = this.keydbclicks.indexOf(key)
            return index !== -1
        }

        /**
         * @return {Boolean}
         */
        isMouseMove() {
            return this.lastPosition.x !== this.currentPosition.x ||
                this.lastPosition.y !== this.currentPosition.y
        }

        setMouseMove() {
            this.lastPosition = this.currentPosition
            this.currentPosition = this.getPosition(event)
        }

        clearKeyClicked() {
            this.keyclicks = []
            this.keydbclicks = []
        }

        clearKeyPressed() {
            this.keydowns = []
        }
    }

    Mouse.MouseButton = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    }

    Mouse.CURSOR = {
        DEFAULT: 'default',
        CROSSHAIR: 'crosshair',
        POINTER: 'pointer',
        MOVE: 'move',
        MOVE_ENTITY: 'moveentity'
    }

    return Mouse
})