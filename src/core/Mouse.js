define(function () {
    class Mouse {
        constructor() {
            this.keys = []
            this.position = { x: 0, y: 0 }
            this.currentPosition = { x: 0, y: 0 }
        }

        getPosition(event) {
            return { x: event.clientX, y: event.clientY }
        }

        setButtonPressed(key) {
            if (!this.isButtonPressed(key)) {
                this.keys.push(key)
            }
            this.position = this.getPosition(event)
        }

        setButtonReleased(key) {
            if (this.isButtonPressed(key)) {
                var index = this.keys.indexOf(key)
                this.keys.splice(index, 1)
            }
        }

        isButtonPressed(key) {
            var index = this.keys.indexOf(key)
            return index !== -1
        }

        setMouseMove() {
            this.currentPosition = this.getPosition(event)
        }
    }

    Mouse.MouseButton = {
        LEFT: 0,
        RIGHT: 2
    }

    return Mouse
})