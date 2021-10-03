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
        if (!this.isKeyPressed(key) && this.isKeyValid(key)) {
            this.keysPressed.push(key)
        }
    }

    /**
     * @return {boolean}
     */
    isOpenShortcutPressed(){
        return this.isKeyPressed(KeyCode.CTRL) && this.isKeyPressed(KeyCode.O)
    }

    /**
     * @return {boolean}
     */
    isNewShortcutPressed(){
        return this.isKeyPressed(KeyCode.CTRL) && this.isKeyPressed(KeyCode.N)
    }

    /**
     * @return {boolean}
     */
    isSaveShortcutPressed(){
        return this.isKeyPressed(KeyCode.CTRL) && this.isKeyPressed(KeyCode.S)
    }

    /**
     * @return {boolean}
     */
    isCopyShortcutPressed(){
        return this.isKeyPressed(KeyCode.CTRL) && this.isKeyPressed(KeyCode.C)
    }

    /**
     * @return {boolean}
     */
    isPasteShortcutPressed(){
        return this.isKeyPressed(KeyCode.CTRL) && this.isKeyPressed(KeyCode.V)
    }

    /**
     * @param {number} key
     */
    setKeyReleased(key) {
        if (this.isKeyPressed(key) && this.isKeyValid(key)) {
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

    /***
     * @return {Boolean}
     */
    isAnyKeyReleased() {
        return this.keysReleased.length > 0
    }

    clear(){
        this.keysReleased = []
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    isKeyValid(key) {
        return Object.values(KeyCode).includes(key)
    }
}

export const KeyCode = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    Z: 90,
    S: 83,
    A: 65,
    Q: 81,
    D: 68,
    SPACE: 32,
    ENTER: 13,
    P: 80,
    M: 77,
    G: 71,
    R: 82,
    C: 67,
    V: 86,
    O: 79,
    B: 66,
    N: 78,
    E: 69,
    BACKSPACE: 8,
    DELETE: 46,
    CTRL: 17,
    SHIFT: 16,
}

export default Keyboard