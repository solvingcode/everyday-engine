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

export const KeyCode = {
    Z: 90,
    S: 83,
    A: 65,
    Q: 81,
    D: 68,
    SPACE: 32,
    ENTER: 13,
    P: 80
}

export default Keyboard