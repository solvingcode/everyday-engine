import Mesh from '../core/Mesh.js'
import Window from '../core/Window.js'
import Vertex from '../utils/Vertex.js'
import Vector from '../utils/Vector.js'
import EntityData from '../project/data/EntityData.js'
import Style from '../pobject/Style.js'
import {CANVAS_CONTEXT_TYPE} from '../core/Constant.js'
import Size from '../pobject/Size.js'
import DataContext from '../pobject/DataContext.js'
import Maths from '../utils/Maths.js'

/**
 * Abstract Entity class
 * @abstract
 * @extends {EntityData}
 * @todo Think to use a MeshManager for performance
 *
 * @property {Mesh} mesh
 * @property {number} id
 * @property {string} shape
 * @property {string} name
 * @property {Style} advancedStyle
 */
class Entity extends EntityData {
    /**
     * @param {EntityProps} props
     */
    constructor(props) {
        super(props)
        if (this.constructor === Entity) {
            throw new TypeError('Abstract class Entity cannot be instantiated directly')
        }
        this.isBuffered = false
        this.isPhyiscsLoaded = false
        this.mesh = new Mesh(this.position, this.size)
        this.meshBgColor = new Mesh()
        this.selected = false
        this.focused = false
        this.attachedEntities = null
        this.generated = true
        this.loading = false
        this.scalable = true
    }

    /**
     * Build the Entity (generate mesh, set properties ...)
     * @param {World} world
     * @return {boolean}
     */
    build(world) {
        return this.init(world) && this.regenerate(world)
    }

    /**
     * End the build of the Entity
     */
    end() {
    }

    /**
     * Generate mesh for the rect
     * @param {World} world
     * @return {boolean}
     */
    generateMesh(world) {
        const dataContext = this.startContext(world)
        if (dataContext) {
            this.drawContext(dataContext)
            return this.closeContext(dataContext)
        }
    }

    /**
     * Called before starting drawing entities (calculate size, init mesh position, ...)
     * @abstract
     * @param {World} world
     * @return {boolean}
     */
    init(world) {
        throw new TypeError('Entity.init must be implemented')
    }

    /**
     * Draw the context
     * @param {DataContext} dataContext
     */
    drawContext(dataContext) {
        throw new TypeError('Entity.drawContext method must be implemented')
    }

    /**
     * Start the context
     * @param {World} world
     * @return {DataContext | null}
     */
    startContext(world) {
        const scaleSize = this.getScaleSize(world.getCamera())
        const {width, height} = this.getLargestRectangle(this.rotation, scaleSize)
        if (width > 0 && height > 0) {
            const center = new Vector({x: scaleSize.width / 2, y: scaleSize.height / 2})
            const canvas = new OffscreenCanvas(width, height)
            const context = canvas.getContext(CANVAS_CONTEXT_TYPE)
            const fillColor = this.getFillColor()
            const {opacity, borderSize} = this.getStyle()
            context.strokeStyle = this.getColor()
            if(fillColor){
                context.fillStyle = fillColor
            }
            if (_.isNumber(opacity)) {
                context.globalAlpha = opacity
            }
            context.lineWidth = borderSize || 1
            context.translate(width / 2, height / 2)
            context.rotate(this.rotation)
            context.translate(-center.x, -center.y)
            return new DataContext(center, context, scaleSize, world.getCamera())
        }
        return null
    }

    /**
     * @param {Camera} camera
     * @return {Size}
     */
    getScaleSize(camera) {
        return camera.toScaleSize(this.size, this.position)
    }

    /**
     * @param {Camera} camera
     * @return {Vector[]}
     */
    getScaleVertices(camera){
        return this.vertices.map(vertex => camera.toCameraScale(vertex))
    }

    /**
     * Close drawing context
     * @param {DataContext} dataContext
     * @return {boolean}
     */
    closeContext(dataContext) {
        const fillColor = this.getFillColor()
        const {borderSize} = this.getStyle()
        const {context, scaleSize} = dataContext
        if (this.getTextureId()) {
            borderSize && context.stroke()
            if (fillColor) {
                context.fill()
                context.globalCompositeOperation = 'destination-over'
            }
            context.clip()
            const canvasBg = this.meshBgColor.context.canvas
            if (this.isBackgroundImageRepeat()) {
                context.fillStyle = context.createPattern(canvasBg, 'repeat')
                context.fill()
            } else {
                context.drawImage(this.meshBgColor.context.canvas, 0, 0, scaleSize.width, scaleSize.height)
            }
        } else if (fillColor) {
            context.stroke()
            context.fill()
        } else {
            context.stroke()
        }
        return this.updateMeshFromContext(context)
    }

    /**
     * Calculate the largest rectangle for given rotation and size
     * @param {number} angleRadian
     * @param {Size} size
     */
    getLargestRectangle(angleRadian, size) {
        const cosA = Math.cos(angleRadian)
        const sinA = Math.sin(angleRadian)
        const points = [
            {x: 0, y: 0},
            {x: size.width, y: 0},
            {x: size.width, y: size.height},
            {x: 0, y: size.height}
        ]
        const rotatedPoints = points.map(({x, y}) => ({
            x: x * cosA - y * sinA,
            y: x * sinA + y * cosA
        }))
        const minX = rotatedPoints.reduce((mnX, current) => ((mnX > current.x && current.x) || mnX), rotatedPoints[0].x)
        const maxX = rotatedPoints.reduce((mxX, current) => ((mxX < current.x && current.x) || mxX), rotatedPoints[0].x)
        const minY = rotatedPoints.reduce((mnY, current) => ((mnY > current.y && current.y) || mnY), rotatedPoints[0].y)
        const maxY = rotatedPoints.reduce((mxY, current) => ((mxY < current.y && current.y) || mxY), rotatedPoints[0].y)
        return {
            width: Math.ceil(maxX - minX),
            height: Math.ceil(maxY - minY)
        }
    }

    /**
     * Generate the entity
     * @param {World} world
     */
    generate(world) {
        return this.isCanGenerate() && this.generateMesh(world)
    }

    /**
     * Regenerate the mesh
     * @param {World} world
     */
    regenerate(world) {
        return this.clearBuffer() && this.generate(world)
    }

    /**
     * Clone the entity (can be redefined for each type)
     */
    clone() {
        const cloned = _.cloneDeep(this)
        cloned.attachedEntities = null
        return cloned
    }

    /**
     * Close the build of the Entity
     * @param {World} world
     */
    close(world) {
        this.position = this.mesh.position
        this.loading = false
    }

    /**
     * Send the Mesh to the renderer for drawing
     * @param {Renderer} renderer
     */
    draw(renderer) {
        if (this.isBuffered) {
            renderer.draw(this)
        }
    }

    /**
     * @override
     */
    setPosition(position) {
        super.setPosition(position)
        this.mesh.position = position
    }

    /**
     * Set the entity's position and generate the Mesh
     * @param {Vector} position
     */
    setPositionAndGenerate(position) {
        this.setPosition(position)
        if (!_.isEqual(this.position, position)) {
            this.setGenerated(false)
        }
    }

    /**
     * Set the entity's rotation
     * @param {Number} angle
     */
    setRotationAndGenerate(angle) {
        if (this.rotation !== angle) {
            super.setRotation(angle)
            this.setGenerated(false)
        }
    }

    /**
     * @param {number} angleRadian
     */
    rotate(angleRadian){
        const newAngleRadian = this.rotation + angleRadian
        this.setRotationDegree(Maths.toDegree(newAngleRadian))
    }

    /**
     * Set the entity's style and re-Generate the Mesh
     * @param {Style} style
     */
    setStyleAndGenerate(style) {
        this.setStyle(style)
        this.setGenerated(false)
    }

    /**
     * Set the entity's size
     * @param {Size} size
     */
    setSizeAndGenerate(size) {
        if (!_.isEqual(this.size, size)) {
            this.setGenerated(false)
        }
        super.setSize(size)
    }

    /**
     * Select the current entity (apply styles, ...).
     * Return true if the entity is selected
     * @return {boolean}
     */
    select() {
        if(this.isSelectable()){
            this.selected = true
            const style = new Style()
            style.setColor('orange')
            style.setBorderSize(3)
            this.setStyleAndGenerate(style)
            return this.selected
        }
    }

    /**
     * Focus the current entity (apply styles, ...)
     */
    focus() {
        this.focused = true
        const style = new Style()
        style.setBorderSize(this.props.style.borderSize)
        style.setOpacity(0.5)
        !this.selected && this.setStyleAndGenerate(style)
    }

    /**
     * Unfocus the current entity (apply styles, ...)
     */
    unfocus() {
        !this.selected && this.focused && this.setStyleAndGenerate(this.defineStyle())
        this.focused = false
    }

    /**
     * Unselect the current entity (apply styles, ...)
     */
    unselect() {
        this.selected && this.setStyleAndGenerate(this.defineStyle())
        this.selected = false
    }

    /**
     * Lock/Unlock the entity for modification
     * @param {Boolean} lock
     */
    lock(lock) {
        this.locked = lock
        this.setStyleAndGenerate(this.defineStyle())
    }

    /**
     * Show the entity
     * @param {boolean} visible
     */
    show(visible) {
        super.setVisible(visible)
    }

    /**
     * @override
     */
    defineStyle() {
        const styleLocked = {color: '#AAAAAA', fillColor: 'rgba(0, 0, 0, 0.01)'}
        return (this.locked && styleLocked) || this.props.style
    }

    /**
     * Set new position for the Mesh
     * @param {Vector} position
     */
    setMeshPosition(position) {
        this.mesh.position = position
    }

    /**
     * Calculate the centroid (based on entity's size)
     * @return {Vector}
     */
    getCenter() {
        return new Vector({
            x: this.size.width / 2,
            y: this.size.height / 2
        })
    }

    /**
     * Calculate centroid (based on entity's rotation)
     * @return {Vector}
     */
    getLargeCenter(){
        const size = this.getLargestRectangle(this.rotation, this.size)
        return new Vector({
            x: size.width / 2,
            y: size.height / 2
        })
    }

    /**
     * Convert current position to center position
     * @return {Vector}
     */
    toCenterPosition() {
        const center = this.getLargeCenter()
        return new Vector({
            x: this.position.x + center.x,
            y: this.position.y + center.y
        })
    }

    /**
     * Convert current position to large center position
     * @return {Vector}
     */
    toLargeCenterPosition() {
        const center = this.getLargeCenter()
        return new Vector({
            x: this.position.x + center.x,
            y: this.position.y + center.y
        })
    }

    /**
     * Get current position from center position
     * @param {Vector} position
     * @return {Vector}
     */
    fromCenterPosition(position) {
        const center = this.getLargeCenter()
        return new Vector({
            x: position.x - center.x,
            y: position.y - center.y
        })
    }

    /**
     * Move current entity from point A to B
     * @param {Vector} pointA absolute position
     * @param {Vector} pointB absolute position
     */
    movePointTo(pointA, pointB) {
        const x = this.position.x + pointB.x - pointA.x
        const y = this.position.y + pointB.y - pointA.y
        this.setPosition(new Vector({x, y}))
    }

    /**
     * Convert relative coordinate to absolute coordinate
     * @param {Vector} point Relative coordinate
     * @return {Vector}
     */
    toAbsolutePosition(point) {
        return new Vector({
            x: point.x + this.mesh.position.x,
            y: point.y + this.mesh.position.y,
            z: point.z
        })
    }

    /**
     * Convert absolute coordinate to relative coordinate
     * @param {Vector} point Absolute coordinate
     * @return {Vector}
     */
    fromAbsolutePosition(point) {
        return new Vector({
            x: point.x - this.mesh.position.x,
            y: point.y - this.mesh.position.y
        })
    }

    /**
     * Convert absolute coordinate to relative coordinate
     * based to the center of the object
     * @param {Vector} point Absolute coordinate
     * @return {Vector}
     */
    toRelativeCenterPosition(point) {
        const {x, y} = this.toCenterPosition()
        return new Vector({
            x: point.x - x,
            y: point.y - y,
            z: point.z
        })
    }

    /**fromRelativeCenterPosition
     * Convert relative coordinate (based to the center) to absolute coordinate
     * @param {Vector} point relative coordinate
     */
    fromRelativeCenterPosition(point) {
        const {x, y} = this.toCenterPosition()
        return {
            x: x + point.x,
            y: y + point.y
        }
    }

    /**
     * Convert relative coordinate to absolute coordinate
     * @param {Vector} point Absolute coordinate
     */
    fromRelativePosition(point) {
        const {x, y} = this.position
        return {
            x: x + point.x,
            y: y + point.y
        }
    }

    /**
     * Update the Mesh position related to the distance
     * between the click mouse position and the actual
     * position of the mouse, and return the drag distance
     * @param {World} world
     * @return {Vector}
     */
    setMeshPositionByDragDistance(world) {
        const window = Window.get()
        const dragDistance = window.mouse.getDragDistanceCamera(world.getCamera())
        this.setMeshPositionByVertex(dragDistance)
        return dragDistance
    }

    /**
     * Update the mesh position using the given vertex, it used to adjusted the position of the entity if the vertex
     * is negated through X or Y axis
     * @param {Vector} vertex
     */
    setMeshPositionByVertex(vertex){
        let newX = this.position.x
        let newY = this.position.y
        if (vertex.x <= 0) {
            newX += vertex.x
        }
        if (vertex.y <= 0) {
            newY += vertex.y
        }
        this.setMeshPosition(new Vector({x: newX, y: newY, z: this.position.z}))
    }

    /**
     * Update the mesh from a given context
     * @param {OffscreenCanvasRenderingContext2D} context
     */
    updateMeshFromContext(context) {
        const sw = context.canvas.width, sh = context.canvas.height
        if (sw && sh) {
            this.mesh.clear(new Size({width: sw, height: sh}))
            this.mesh.context = context
            return true
        }
        return false
    }

    /**
     * Clear the buffer and the Mesh
     */
    clearBuffer() {
        this.isBuffered = false
        return this.mesh.clear()
    }

    /**
     * Set the buffer flag
     */
    addToBuffer() {
        if (!this.isBuffered) {
            this.isBuffered = true
            return true
        }
        return false
    }

    /**
     * Unload physics for the entity
     * @param {PhysicsEngine} physicsEngine
     */
    unloadPhysics(physicsEngine) {
        if (this.isPhyiscsLoaded) {
            physicsEngine.removeShape(this)
        }
        this.isPhyiscsLoaded = false
    }

    /**
     * Add entity to physics Engine
     * @param {PhysicsEngine} physicsEngine
     * @param {World} world
     */
    loadPhysics(physicsEngine, world) {
        if (!this.isPhyiscsLoaded) {
            physicsEngine.add(this, world)
            this.isPhyiscsLoaded = true
        }
    }

    /**
     * Check if point is inside the entity (using size)
     * Method can be overwrite by the sub-entities for more precision
     * @param {Vector} point absolute coordinate
     */
    includes(point) {
        const vertices = this.generateVertices()
        return Vertex.contains(vertices, this.fromAbsolutePosition(point))
    }

    /**
     * @return {Vector[]}
     */
    loadVertices() {
        const {width, height} = this.size
        return [
            {x: 0, y: 0},
            {x: width, y: 0},
            {x: width, y: height},
            {x: 0, y: height}
        ]
    }

    /**
     * Generate vertices for the current entity (relative coordinates)
     * @return {Vector[]}
     */
    generateVertices() {
        const vertices = this.loadVertices()
        return this.rotateVertices(vertices, this.rotation)
    }

    /**
     * @param {Vector[]} vertices
     * @param {number} rotation
     * @param {Vector} rotateCenter
     * @return {Vector[]}
     */
    rotateVertices(vertices, rotation, rotateCenter = new Vector()){
        const {width: mWidth, height: mHeight} = this.getLargestRectangle(rotation, this.size)
        const center = new Vector({x: this.size.width / 2, y: this.size.height / 2})
        const mCenter = new Vector({x: mWidth / 2, y: mHeight / 2})

        let newVertices = vertices
        newVertices = Vertex.translate(newVertices, center, -1)
        newVertices = Vertex.rotate(newVertices, rotation, rotateCenter)
        newVertices = Vertex.translate(newVertices, mCenter)

        return newVertices
    }

    /**
     * Is entity valid (not in loading mode, ...)
     */
    isValid() {
        return !this.loading
    }

    /**
     * Is entity active (valid, unlocked, ...)
     */
    isActive() {
        return this.isValid() && !this.isLocked() && this.isVisible() && !this.isSubEntity()
    }

    /**
     * is the generate hook must be disabled
     */
    isCanGenerate() {
        return super.isVisible()
    }

    /**
     * @return {boolean}
     */
    isGenerated() {
        return this.generated
    }

    /**
     * @param {boolean} generated
     */
    setGenerated(generated) {
        this.generated = generated
    }

    /**
     * @override
     */
    setTextureId(textureId) {
        super.setTextureId(textureId)
        this.setGenerated(false)
    }

    /**
     * @param {World} world
     */
    updateTexture(world) {
        this.meshBgColor = this.getTexture(world)
    }

    /**
     * @param {World} world
     * @return {Mesh}
     */
    getTexture(world) {
        const texture = world.getTextureManager().findById(this.getTextureId())
        if (texture) {
            return texture.getMesh()
        }
        return null
    }

    /**
     * @return {boolean}
     */
    isLoading() {
        return this.loading
    }

    /**
     * @return {boolean}
     */
    isScalable(){
        return this.scalable
    }

    /**
     * @param {boolean} loading
     */
    setLoading(loading) {
        this.loading = loading
    }

    /**
     * @param {boolean} value
     */
    setIsBuffered(value) {
        this.isBuffered = value
    }

    /**
     * @param {boolean} value
     */
    setIsPhyiscsLoaded(value) {
        this.isPhyiscsLoaded = value
    }

    /**
     * @param {Mesh} value
     */
    setMesh(value) {
        this.mesh = value
    }

    /**
     * @param {Mesh} value
     */
    setMeshBgColor(value) {
        this.meshBgColor = value
    }

    /**
     * @param {boolean} value
     */
    setSelected(value) {
        this.selected = value
    }

    /**
     * @param {boolean} value
     */
    setFocused(value) {
        this.focused = value
    }

    /**
     * @param {Entity[]} entities
     */
    setAttachedEntities(entities) {
        this.attachedEntities = entities
    }

    /**
     * @param {number} index
     * @param {World} world
     * @return {Entity}
     */
    getLinkedEntityAt( index, world){
        return world.findEntityById(this.entityLinkIds[index])
    }

    /**
     * @param {Entity} entityA
     * @param {Entity} entityB
     */
    setLinkEntities(entityA, entityB) {
        this.entityLinkIds[0] = entityA && entityA.id
        this.entityLinkIds[1] = entityB && entityB.id
    }

    /**
     * @param {number} index
     * @param {Entity} entity
     */
    setLinkEntity(index, entity){
        this.entityLinkIds[index] = entity && entity.id
    }

    getFillColor() {
        return this.style.fillColor || this.props.style.fillColor
    }

    getColor() {
        return this.style.color || this.props.style.color
    }

}

export default Entity