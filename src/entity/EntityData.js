define(function (require) {

    const Maths = require('../utils/Maths.js')

    /**
     * Class define all entity's data and props (getters and setters)
     * @abstract
     */
    class EntityData{

        /**
         * @param {EntityProps} props
         */
        constructor(props = {}) {
            props.style = props.style || {color: '#000000', fillColor: ''}
            this.id = Maths.generateId()
            this.shape = null
            this.name = props.name
            this.position = props.position
            this.rotation = props.rotation || 0
            this.center = null
            this.radius = null
            this.vertices = null
            this.size = props.size || 1
            this.style = props.style
            this.advancedStyle = Object.assign(
                {backgroundImageBlob: '', backgroundImageRepeat: false},
                props.advancedStyle || {}
            )
            this.selectable = true
            this.locked = false
            this.visible = false
            this.clonable = true
            this.noiseConfigs = props.noiseConfigs || {}
        }

        /**
         * @return {number}
         */
        getId() {
            return this.id
        }

        /**
         * @return {string}
         */
        getName() {
            return this.name
        }

        /**
         * @param {string} name
         */
        setName(name) {
            this.name = name
        }

        /**
         * @param {string} backgroundImageBlob
         */
        setBackgroundImageBlob(backgroundImageBlob) {
            this.advancedStyle.backgroundImageBlob = backgroundImageBlob
        }

        /**
         * @return {string}
         */
        getBackgroundImageBlob() {
            return this.advancedStyle.backgroundImageBlob
        }

        /**
         * @param {boolean} repeat
         */
        setBackgroundImageRepeat(repeat) {
            this.advancedStyle.backgroundImageRepeat = repeat
            this.regenerate()
        }

        /**
         * @return {boolean}
         */
        getBackgroundImageRepeat() {
            return this.advancedStyle.backgroundImageRepeat
        }

        /**
         * @return {boolean}
         */
        isBackgroundImageRepeat() {
            return this.getBackgroundImageRepeat()
        }

        /**
         * Set the entity's position
         * @param {{x: number, y: number}} position
         */
        setPosition(position) {
            this.position = position
        }

        /**
         * @return {{x: number, y: number}}
         */
        getPosition(){
            return this.position
        }

        /**
         * @param {string} x
         */
        setPositionX(x) {
            this.setPositionAndGenerate({x: parseInt(x), y: this.position.y})
        }

        /**
         * @param {string} y
         */
        setPositionY(y) {
            this.setPositionAndGenerate({x: this.position.x, y: parseInt(y)})
        }

        /**
         * @return {number}
         */
        getPositionX() {
            return this.position.x
        }

        /**
         * @return {number}
         */
        getPositionY() {
            return this.position.y
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
         * @param {{width: number, height: number}} value
         */
        setSize(value) {
            this.size = value
        }

        /**
         * @return {{width: number, height: number}}
         */
        getSize() {
            return this.size
        }

        /**
         * @return {number}
         */
        getWidth() {
            return this.size.width
        }

        /**
         * @return {number}
         */
        getHeight() {
            return this.size.height
        }

        /**
         * @return {number}
         */
        getRotationDegree() {
            return Maths.toDegree(this.rotation)
        }

        /**
         * @param {string|number} width
         */
        setWidth(width) {
            this.setSizeAndGenerate({width: parseInt(width), height: this.size.height})
        }

        /**
         * @param {string|number} height
         */
        setHeight(height) {
            this.setSizeAndGenerate({width: this.size.width, height: parseInt(height)})
        }

        /**
         * @param {number} angle
         */
        setRotationDegree(angle) {
            this.setRotationAndGenerate(Maths.fromDegree(angle))
        }

        setStyle(style) {
            this.style = style
        }

        /**
         * @param {boolean} value
         */
        setVisible(value) {
            this.visible = value
        }

        /**
         * @return {boolean}
         */
        getVisible() {
            return this.visible
        }

        /**
         * @return {boolean}
         */
        isVisible() {
            return this.getVisible()
        }

        /**
         * @return {boolean}
         */
        getLocked() {
            return this.locked
        }

        /**
         * @return {boolean}
         */
        isLocked() {
            return this.getLocked()
        }

        /**
         * @param {number} value
         */
        setSeed(value){
            this.noiseConfigs.seed = value
        }

        /**
         * @returns {number}
         */
        getSeed(){
            return this.noiseConfigs.seed
        }

        /**
         * @param {number} value
         */
        setOctaves(value){
            this.noiseConfigs.octaves = value
        }

        /**
         * @returns {number}
         */
        getOctaves(){
            return this.noiseConfigs.octaves
        }

        /**
         * @param {number} value
         */
        setAmplitude(value){
            this.noiseConfigs.amplitude = value
        }

        /**
         * @returns {number}
         */
        getAmplitude(){
            return this.noiseConfigs.amplitude
        }

        /**
         * @param {number} value
         */
        setPersistence(value){
            this.noiseConfigs.persistence = value
        }

        /**
         * @returns {number}
         */
        getPersistence(){
            return this.noiseConfigs.persistence
        }

        /**
         * @param {number} value
         */
        setSmoothness(value){
            this.noiseConfigs.smoothness = value
        }

        /**
         * @returns {number}
         */
        getSmoothness(){
            return this.noiseConfigs.smoothness
        }

    }

    EntityData.shapes = {
        ELLIPSE: 'ellipse',
        RECT: 'rect',
        LINE: 'line',
        POLY: 'poly',
        CIRCLE: 'circle',
        ATTACH: 'attach',
        GROUP: 'group',
        VIRTUAL: 'virtual'
    }

    /**
     * @typedef {{color: string, fillColor: string}} Style
     * @typedef {{style: Style, name: string,
     *      position: {x: number, y: number},
     *      rotation: number,
     *      size: {width: number, height: number} | number
     *      advancedStyle: {backgroundImageBlob: string, backgroundImageRepeat: boolean}
     *      noiseConfigs: PerlinNoiseConfig
     *      }} EntityProps
     */

    return EntityData

})