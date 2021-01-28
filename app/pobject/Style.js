define(function () {
    /**
     * @class {Style}
     */
    class Style {

        color
        fillColor
        backgroundImageRepeat
        opacity
        borderSize

        /**
         * @param {string} color
         */
        setColor(color){
            this.color = color
        }

        /**
         * @return {string}
         */
        getColor(){
            return this.color
        }

        /**
         * @param {string} fillColor
         */
        setFillColor(fillColor){
            this.fillColor = fillColor
        }

        /**
         * @return {string}
         */
        getFillColor(){
            return this.fillColor
        }

        /**
         * @param {boolean} backgroundImageRepeat
         */
        setBackgroundImageRepeat(backgroundImageRepeat){
            this.backgroundImageRepeat = backgroundImageRepeat
        }

        /**
         * @return {boolean}
         */
        getBackgroundImageRepeat(){
            return this.backgroundImageRepeat
        }

        /**
         * @param {number} opacity
         */
        setOpacity(opacity){
            this.opacity = opacity
        }

        /**
         * @return {number}
         */
        getOpacity(){
            return this.opacity
        }

        /**
         * @param {number} borderSize
         */
        setBorderSize(borderSize){
            this.borderSize = borderSize
        }

        /**
         * @return {number}
         */
        getBorderSize(){
            return this.borderSize
        }

    }
    export default Style
})