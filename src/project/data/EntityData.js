define(function(require){

    const Data = require('./Data.js')
    const Maths = require('../../utils/Maths.js')
    const Size = require('../../pobject/Size.js')

    /**
     * Class define all entity's data and props (getters and setters)
     * @abstract
     * @extends {Data}
     */
    class EntityData extends Data{

        shape
        center
        radius
        vertices
        physics
        textureId
        selectable
        locked
        visible
        clonable
        subEntity

        /**
         * @param {EntityProps} props
         */
        constructor(props = {}) {
            super()
            this.id = Maths.generateId()
            this.selectable = true
            this.locked = false
            this.visible = false
            this.clonable = true
            this.subEntity = false
            this.setProps(props)
        }

        /**
         * @param {number} id
         */
        setId(id) {
            this.id = id
        }

        /**
         * @param {string} shape
         */
        setShape(shape) {
            this.shape = shape
        }

        /**
         * @return {string}
         */
        getShape(){
            return this.shape
        }

        /**
         * @param {Vector} center
         */
        setCenter(center) {
            this.center = center
        }

        /**
         * @return {Vector}
         */
        getCenter() {
            return this.center
        }

        /**
         * @param {number} radius
         */
        setRadius(radius) {
            this.radius = radius
        }

        /**
         * @return {number}
         */
        getRadius() {
            return this.radius
        }

        /**
         * @param {number[]} vertices
         */
        setVertices(vertices){
            this.vertices = vertices
        }

        /**
         * @return {number[]}
         */
        getVertices(){
            return this.vertices
        }

        /**
         * @param {Style} advancedStyle
         */
        setAdvancedStyle(advancedStyle){
            this.advancedStyle = advancedStyle
        }

        /**
         * @return {Style}
         */
        getAdvancedStyle(){
            return this.advancedStyle
        }

        /**
         * @param {PerlinNoiseConfig} noiseConfigs
         */
        setNoiseConfigs(noiseConfigs){
            this.noiseConfigs = noiseConfigs
        }

        /**
         * @return {PerlinNoiseConfig}
         */
        getNoiseConfigs(){
            return this.noiseConfigs
        }

        /**
         * @param {EntityProps} props
         */
        setProps(props){
            this.props = props
            props.style = props.style || {color: '#000000', fillColor: ''}
            this.name = props.name
            this.position = props.position
            this.rotation = props.rotation || 0
            this.size = props.size || new Size(1)
            this.style = props.style
            this.advancedStyle = Object.assign(
                {backgroundImageBlob: '', backgroundImageRepeat: false},
                props.advancedStyle || {}
            )
            this.noiseConfigs = props.noiseConfigs || {}
        }

        /**
         * @return {EntityProps}
         */
        getProps() {
            return this.props
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
         * @return {Size}
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

        /**
         * @param {string} style
         */
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
         * @param {boolean} selectable
         */
        setSelectable(selectable) {
            this.selectable = selectable
        }

        /**
         * @return {boolean}
         */
        getSelectable() {
            return this.selectable
        }

        /**
         * @return {boolean}
         */
        isSelectable(){
            return this.getSelectable()
        }

        /**
         * @return {boolean}
         */
        isSelected(){
            return this.selected
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
         * @param {boolean} locked
         */
        setLocked(locked) {
            this.locked = locked
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
         * @param {boolean} clonable
         */
        setClonable(clonable) {
            this.clonable = clonable
        }

        /**
         * @return {boolean}
         */
        getClonable() {
            return this.clonable
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

        /**
         * @param {PhysicsProps} physics
         */
        setPhysics(physics){
            this.physics = physics
        }

        /**
         * @return {PhysicsProps}
         */
        getPhysics(){
            return this.physics
        }

        /**
         * @param {number} textureId
         */
        setTextureId(textureId){
            this.textureId = textureId
        }

        /**
         * @return {number}
         */
        getTextureId(){
            return this.textureId
        }

        /**
         * @return {boolean}
         */
        getSubEntity(){
            return this.subEntity
        }

        /**
         * @param {boolean} subEntity
         */
        setSubEntity(subEntity){
            this.subEntity = subEntity
        }

        /**
         * @return {boolean}
         */
        isSubEntity(){
            return this.getSubEntity()
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

    return EntityData

})