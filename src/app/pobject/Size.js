/**
 * @class {Size}
 */
class Size {
    /**
     * @param {number|{width: number, height: number}} size
     */
    constructor(size) {
        let width = 0, height = 0
        if (typeof size !== 'object') {
            width = size
            height = size
        } else if (size) {
            width = size.width || width
            height = size.height || height
        }
        this.width = width
        this.height = height
    }

    /**
     * @param {number|string} width
     */
    setWidth(width) {
        this.width = parseInt(width)
    }

    /**
     * @return {number}
     */
    getWidth() {
        return this.width
    }

    /**
     * @param {number|string} height
     */
    setHeight(height) {
        this.height = parseInt(height)
    }

    /**
     * @return {number}
     */
    getHeight() {
        return this.height
    }
}

export default Size