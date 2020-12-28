define(function () {
    /**
     * @class {Size}
     */
    class Size {
        constructor({ width, height } = {width: 0, height: 0}) {
            this.width = width
            this.height = height
        }
    }
    return Size
})