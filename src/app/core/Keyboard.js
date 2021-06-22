/**
 * Define the keyboard inputs (key pressed, released)
 * @property {number[]} keys
 */
class Keyboard {
    constructor() {
        this.keysPressed = []
        this.keysReleased = []
    }

    /**
     * @param {number} key
     */
    setKeyPressed(key) {
        if (!this.isKeyPressed(key)) {
            this.keysPressed.push(key)
        }
    }

    /**
     * @param {number} key
     */
    setKeyReleased(key) {
        if (this.isKeyPressed(key)) {
            let index = this.keysPressed.indexOf(key)
            this.keysPressed.splice(index, 1)
            this.keysReleased.push(key)
        }
    }

    /**
     * @param {number} key
     * @return {Boolean}
     */
    isKeyPressed(key) {
        let index = this.keysPressed.indexOf(key)
        return index !== -1
    }

    /**
     * @param {number} key
     * @return {Boolean}
     */
    isKeyReleased(key) {
        let index = this.keysReleased.indexOf(key)
        return index !== -1
    }

    /***
     * @return {Boolean}
     */
    isAnyKeyPressed() {
        return this.keysPressed.length > 0
    }

    clear(){
        this.keysReleased = []
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