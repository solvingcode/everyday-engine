/**
 * @class {Style}
 */
class Style {

    color
    colorOpacity = 1
    fillColor
    fillColorOpacity = 1
    backgroundImageRepeat
    opacity
    borderSize

    /**
     * @param {string} color
     */
    setColor(color) {
        this.color = color
    }

    /**
     * @return {string}
     */
    getColor() {
        return this.color
    }

    /**
     * @param {number} colorOpacity
     */
    setColorOpacity(colorOpacity) {
        this.colorOpacity = colorOpacity
    }

    /**
     * @return {number}
     */
    getColorOpacity() {
        return this.colorOpacity
    }

    /**
     * @param {string} fillColor
     */
    setFillColor(fillColor) {
        this.fillColor = fillColor
    }

    /**
     * @return {string}
     */
    getFillColor() {
        return this.fillColor
    }

    /**
     * @param {number} fillColorOpacity
     */
    setFillColorOpacity(fillColorOpacity) {
        this.fillColorOpacity = fillColorOpacity
    }

    /**
     * @return {number}
     */
    getFillColorOpacity() {
        return this.fillColorOpacity
    }

    /**
     * @param {boolean} backgroundImageRepeat
     */
    setBackgroundImageRepeat(backgroundImageRepeat) {
        this.backgroundImageRepeat = backgroundImageRepeat
    }

    /**
     * @return {boolean}
     */
    getBackgroundImageRepeat() {
        return this.backgroundImageRepeat
    }

    /**
     * @param {number} opacity
     */
    setOpacity(opacity) {
        this.opacity = opacity
    }

    /**
     * @return {number}
     */
    getOpacity() {
        return this.opacity
    }

    /**
     * @param {number} borderSize
     */
    setBorderSize(borderSize) {
        this.borderSize = borderSize
    }

    /**
     * @return {number}
     */
    getBorderSize() {
        return this.borderSize
    }

}

export default Style