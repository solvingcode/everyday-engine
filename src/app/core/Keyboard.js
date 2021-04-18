/**
 * Define the keyboard inputs (key pressed, released)
 * @property {number[]} keys
 */
class Keyboard {
    constructor() {
        this.keys = []
    }

    /**
     * @param {number} key
     */
    setKeyPressed(key) {
        if (!this.isKeyPressed(key)) {
            this.keys.push(key)
        }
    }

    /**
     * @param {number} key
     */
    setKeyReleased(key) {
        if (this.isKeyPressed(key)) {
            let index = this.keys.indexOf(key)
            this.keys.splice(index, 1)
        }
    }

    /**
     * @param {number} key
     * @return {Boolean}
     */
    isKeyPressed(key) {
        let index = this.keys.indexOf(key)
        return index !== -1
    }

    /***
     * @return {Boolean}
     */
    isAnyKeyPressed() {
        return this.keys.length > 0
    }
}

Keyboard.Keys = {
    CTRL: 17
}

export default Keyboard