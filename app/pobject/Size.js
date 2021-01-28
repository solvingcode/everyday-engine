define(function () {
    /**
     * @class {Size}
     */
    class Size {
        /**
         * @param {number|{width: number, height: number}} size
         */
        constructor(size) {
            let width = 0, height = 0
            if(_.isNumber(size)){
                width = size
                height = size
            }else if(size){
                width = size.width || width
                height = size.height || height
            }
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
    export default Size
})