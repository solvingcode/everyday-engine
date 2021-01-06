define(function () {
    /**
     * @class {Size}
     */
    class Size {
        constructor({ width, height } = {width: 0, height: 0}) {
            this.width = width
            this.height = height
        }

        /**
         * @param {number} width
         */
        setWidth(width){
            this.width = width
        }

        /**
         * @return {number}
         */
        getWidth(){
            return this.width
        }

        /**
         * @param {number} height
         */
        setHeight(height){
            this.height = height
        }

        /**
         * @return {number}
         */
        getHeight(){
            return this.height
        }
    }
    return Size
})