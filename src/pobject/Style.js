define(function () {
    /**
     * @class {Style}
     */
    class Style {
        constructor() {
            this.color = null
            this.fillColor = null
            this.backgroundImageBlob = null
            this.backgroundImageRepeat = false
        }

        /**
         * @param {string} color
         */
        setColor(color){
            this.color = color
        }

        /**
         * @param {string} fillColor
         */
        setFillColor(fillColor){
            this.fillColor = fillColor
        }

        /**
         * @param {string} backgroundImageBlob
         */
        setBackgroundImageBlob(backgroundImageBlob){
            this.backgroundImageBlob = backgroundImageBlob
        }

        /**
         * @param {boolean} backgroundImageRepeat
         */
        setBackgroundImageRepeat(backgroundImageRepeat){
            this.backgroundImageRepeat = backgroundImageRepeat
        }
    }
    return Style
})