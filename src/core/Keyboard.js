define(function () {
    class Keyboard {
        constructor() {
            this.keys = []
        }

        setKeyPressed(key) {
            if (!this.isKeyPressed(key)) {
                this.keys.push(key)
            }
        }

        setKeyReleased(key) {
            if (this.isKeyPressed(key)) {
                var index = this.keys.indexOf(key)
                this.keys.splice(index, 1)
            }
        }

        isKeyPressed(key) {
            var index = this.keys.indexOf(key)
            return index !== -1
        }
    }

    return Keyboard
})