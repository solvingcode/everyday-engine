define(function () {
    /**
     * @class {Style}
     */
    class Style {

        color
        fillColor
        backgroundImageRepeat

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
    }
    return Style
})