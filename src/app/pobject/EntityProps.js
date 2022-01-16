import Vector from '../utils/Vector.js'
import Size from './Size.js'
import Style from './Style.js'
import PerlinNoiseConfig from './PerlinNoiseConfig.js'

class EntityProps {

    style
    name
    position
    rotation
    size
    advancedStyle
    noiseConfigs
    textureId

    constructor() {
        this.position = new Vector()
        this.size = new Size(1)
        this.style = new Style()
        this.advancedStyle = new Style()
        this.noiseConfigs = new PerlinNoiseConfig()
    }

    /**
     * @param {Style} advancedStyle
     */
    setAdvancedStyle(advancedStyle) {
        this.advancedStyle = advancedStyle
    }

    /**
     * @return {Style}
     */
    getAdvancedStyle() {
        return this.advancedStyle
    }

    /**
     * @param {PerlinNoiseConfig} noiseConfigs
     */
    setNoiseConfigs(noiseConfigs) {
        this.noiseConfigs = noiseConfigs
    }

    /**
     * @return {PerlinNoiseConfig}
     */
    getNoiseConfigs() {
        return this.noiseConfigs
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

    /**
     * Set the entity's position
     * @param {Vector} position
     */
    setPosition(position) {
        this.position = position
    }

    /**
     * @return {Vector}
     */
    getPosition() {
        return this.position
    }

    /**
     * @param {Size} value
     */
    setSize(value) {
        this.size = value
    }

    /**
     * @return {Size}
     */
    getSize() {
        return this.size
    }

    /**
     * @param {Style} style
     */
    setStyle(style) {
        this.style = style
    }

    /**
     * @return {Style}
     */
    getStyle() {
        return this.style
    }

    /**
     * @param {number} value
     */
    setRotation(value) {
        this.rotation = value
    }

    /**
     * @return {number}
     */
    getRotation() {
        return this.rotation
    }

    /**
     * @param {number} textureId
     */
    setTextureId(textureId) {
        this.textureId = textureId
    }

    /**
     * @return {number}
     */
    getTextureId() {
        return this.textureId
    }

}

export default EntityProps