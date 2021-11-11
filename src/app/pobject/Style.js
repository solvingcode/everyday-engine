/**
 * @class {Style}
 */
import Vector from '../utils/Vector.js'

export default class Style {

    color
    colorOpacity = 1
    fillColor
    fillColorOpacity = 1
    opacity
    borderSize
    shadowColor
    shadowPosition = new Vector()
    shadowBlur = 0
    gradientColorAssetId

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
     * @param {number} opacity
     */
    setOpacity(opacity) {
        this.opacity = opacity
    }

    /**
     * @return {number|string}
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

    /**
     * @param {string} color
     */
    setShadowColor(color) {
        this.shadowColor = color
    }

    /**
     * @return {string}
     */
    getShadowColor() {
        return this.shadowColor
    }

    /**
     * @param {Vector} position
     */
    setShadowPosition(position) {
        this.shadowPosition = position
    }

    /**
     * @return {Vector}
     */
    getShadowPosition() {
        return this.shadowPosition
    }

    /**
     * @param {number} shadowBlur
     */
    setShadowBlur(shadowBlur) {
        this.shadowBlur = shadowBlur
    }

    /**
     * @return {number}
     */
    getShadowBlur() {
        return this.shadowBlur
    }

    /**
     * @param {number} assetId
     */
    setGradientColorAssetId(assetId) {
        this.gradientColorAssetId = assetId
    }

    /**
     * @return {number}
     */
    getGradientColorAssetId() {
        return this.gradientColorAssetId
    }

}
