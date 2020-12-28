define(function (require) {

    const Mesh = require('../core/Mesh.js')
    const Window = require('../core/Window.js')
    const Keyboard = require('../core/Keyboard.js')
    const Vertex = require('../utils/Vertex.js')
    const Vector = require('../utils/Vector.js')
    const EntityData = require('./EntityData.js')

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
            this.props = props
            this.isBuffered = false
            this.isPhyiscsLoaded = false
            this.mesh = new Mesh(this.position, this.size)
            this.meshBgColor = new Mesh()
            this.selected = false
            this.focused = false
            this.attachedEntities = null
        }

        /**
         * @override
         */
        async setBackgroundImageBlob(backgroundImageBlob) {
            super.setBackgroundImageBlob(backgroundImageBlob)
            if (await this.meshBgColor.fromImage(backgroundImageBlob)) {
                this.regenerate()
            }
        }

        /**
         * Build the Entity (generate mesh, set properties ...)
         * @return {boolean}
         */
        build() {
            return this.init() && this.regenerate()
        }

        /**
         * End the build of the Entity
         */
        end() {
        }

        /**
         * Generate mesh for the rect
         * @return {boolean}
         */
        generateMesh() {
            const dataContext = this.startContext()
            if (dataContext) {
                this.drawContext(dataContext)
                return this.closeContext(dataContext)
            }
        }

        /**
         * Called before starting drawing entities (calculate size, init mesh position, ...)
         * @abstract
         * @return {boolean}
         */
        init() {
            throw new TypeError('Entity.init must be implemented')
        }

        /**
         * Draw the context
         * @param {DataContext} dataContext
         */
        drawContext(dataContext) {
            throw new TypeError('"drawContext" method must be implemented')
        }

        /**
         * Start the context
         * @return {DataContext | null}
         */
        startContext() {
            const {width, height} = this.getLargestRectangle(this.rotation, this.size)
            if (width && height) {
                const center = {x: this.size.width / 2, y: this.size.height / 2}
                const canvas = new OffscreenCanvas(width, height)
                const context = canvas.getContext(CANVAS_CONTEXT_TYPE)
                const fillColor = this.getFillColor()
                context.strokeStyle = this.getColor()
                if (fillColor) {
                    context.fillStyle = fillColor
                }
                context.lineWidth = 1
                context.translate(width / 2, height / 2)
                context.rotate(this.rotation)
                context.translate(-center.x, -center.y)
                return {center, context}
            }
            return null
        }

        /**
         * Close drawing context
         * @param {DataContext} dataContext
         * @return {boolean}
         */
        closeContext(dataContext) {
            const fillColor = this.getFillColor()
            const {context} = dataContext
            if (fillColor) {
                context.stroke()
                context.fill()
            } else if (this.getBackgroundImageBlob()) {
                context.clip()
                const canvasBg = this.meshBgColor.context.canvas
                if (this.isBackgroundImageRepeat()) {
                    context.fillStyle = context.createPattern(canvasBg, 'repeat')
                    context.fill()
                } else {
                    context.drawImage(this.meshBgColor.context.canvas, 0, 0, this.size.width, this.size.height)
                }
            } else {
                context.stroke()
            }
            return this.updateMeshFromContext(context)
        }

        /**
         * Calculate the largest rectangle for given rotation and size
         * @param {number} angleRadian
         * @param {Object} size
         */
        getLargestRectangle(angleRadian, size) {
            const cosA = Math.cos(angleRadian)
            const sinA = Math.sin(angleRadian)
            const points = [
                {x: 0, y: 0},
                {x: size.width, y: 0},
                {x: size.width, y: size.height},
                {x: 0, y: size.height},
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
         */
        generate() {
            return this.isCanGenerate() && this.generateMesh()
        }

        /**
         * Regenerate the mesh
         */
        regenerate() {
            return this.clearBuffer() && this.generate()
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
         */
        close() {
            this.position = this.mesh.position
            this.loading = false
        }

        /**
         * Update the entity props and the Mesh
         */
        update() {
            this.addToBuffer()
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
         */
        setPositionAndGenerate(position) {
            this.setPosition(position)
            if(!_.isEqual(this.position, position)){
                this.regenerate()
            }
        }

        /**
         * Set the entity's rotation
         * @param {Number} angle
         */
        setRotationAndGenerate(angle) {
            if (this.rotation !== angle) {
                super.setRotation(angle)
                this.regenerate()
            }
        }

        /**
         * Set the entity's style and re-Generate the Mesh
         * @param {Style} style
         */
        setStyleAndGenerate(style) {
            this.setStyle(style)
            this.regenerate()
        }

        /**
         * Set the entity's size
         * @param {{width: number, height: number}} size
         */
        setSizeAndGenerate(size) {
            super.setSize(size)
            if (!_.isEqual(this.size, size)) {
                this.regenerate()
            }
        }

        /**
         * Select the current entity (apply styles, ...)
         */
        select() {
            this.selected = true
            this.setStyleAndGenerate({color: '#FF00FF', fillColor: 'rgba(255, 0, 255, 0.2)'})
        }

        /**
         * Focus the current entity (apply styles, ...)
         */
        focus() {
            this.focused = true
            !this.selected && this.setStyleAndGenerate({color: '#000000', fillColor: 'rgba(0, 0, 0, 0.1)'})
        }

        /**
         * Unfocus the current entity (apply styles, ...)
         */
        unfocus() {
            !this.selected && this.focused && this.setStyleAndGenerate(this.getStyle())
            this.focused = false
        }

        /**
         * Unselect the current entity (apply styles, ...)
         */
        unselect() {
            this.selected && this.setStyleAndGenerate(this.getStyle())
            this.selected = false
        }

        /**
         * Lock/Unlock the entity for modification
         * @param {Boolean} lock
         */
        lock(lock) {
            this.locked = lock
            this.setStyleAndGenerate(this.getStyle())
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
        getStyle() {
            const styleLocked = {color: '#AAAAAA', fillColor: 'rgba(0, 0, 0, 0.01)'}
            return (this.locked && styleLocked) || this.props.style
        }

        /**
         * Set new position for the Mesh
         * @param {Object} position
         */
        setMeshPosition(position) {
            this.mesh.position = position
        }

        /**
         * Calculate the centroid
         * @return {{x: number, y: number}}
         */
        getCenter() {
            return {
                x: this.mesh.size.width / 2,
                y: this.mesh.size.height / 2
            }
        }

        /**
         * Convert current position to center position
         * @return {{x: number, y: number}}
         */
        toCenterPosition() {
            const center = this.getCenter()
            return {
                x: this.position.x + center.x,
                y: this.position.y + center.y
            }
        }

        /**
         * Get current position from center position
         * @param {Vector} position
         * @return {{x: number, y: number}}
         */
        fromCenterPosition(position) {
            const center = this.getCenter()
            return {
                x: position.x - center.x,
                y: position.y - center.y
            }
        }

        /**
         * Move current entity from point A to B
         * @param {Vector} pointA absolute position
         * @param {Vector} pointB absolute position
         */
        movePointTo(pointA, pointB) {
            const x = this.position.x + pointB.x - pointA.x
            const y = this.position.y + pointB.y - pointA.y
            this.setPosition({x, y})
        }

        /**
         * Convert relative coordinate to absolute coordinate
         * @param {{x: number, y: number}} point Relative coordinate
         * @return {{x: number, y: number}}
         */
        toAbsolutePosition(point) {
            return {
                x: point.x + this.mesh.position.x,
                y: point.y + this.mesh.position.y
            }
        }

        /**
         * Convert absolute coordinate to relative coordinate
         * @param {{x: number, y: number}} point Absolute coordinate
         */
        fromAbsolutePosition(point) {
            return {
                x: point.x - this.mesh.position.x,
                y: point.y - this.mesh.position.y
            }
        }

        /**
         * Convert absolute coordinate to relative coordinate
         * based to the center of the object
         * @param {{x: number, y: number}} point Absolute coordinate
         * @return {{x: number, y: number}}
         */
        toRelativeCenterPosition(point) {
            const {x, y} = this.toCenterPosition()
            return {
                x: point.x - x,
                y: point.y - y
            }
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
         * @return {{x: number, y: number}}
         */
        setMeshPositionByDragDistance() {
            const window = Window.get()
            const dragDistance = window.mouse.getDragDistance()
            let newX = this.position.x
            let newY = this.position.y
            if (dragDistance.x <= 0) {
                newX += dragDistance.x
            }
            if (dragDistance.y <= 0) {
                newY += dragDistance.y
            }
            this.setMeshPosition({x: newX, y: newY})
            return dragDistance
        }

        /**
         * Get the current position of the mouse
         * @return {{x: number, y: number}}
         */
        getCurrentMousePosition() {
            const dragDistance = Window.get().mouse.getDragDistance()
            return Vector.add(this.position, dragDistance)
        }

        /**
         * Verify if CTRL key is pressed
         */
        isCtrlKeyPressed() {
            return Window.get().keyboard.isKeyPressed(Keyboard.Keys.CTRL)
        }

        /**
         * Update the mesh from a given context
         * @param {OffscreenCanvasRenderingContext2D} context
         */
        updateMeshFromContext(context) {
            const sw = context.canvas.width, sh = context.canvas.height
            if (sw && sh) {
                this.mesh.clear({width: sw, height: sh})
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
            if(this.isPhyiscsLoaded){
                physicsEngine.removeShape(this)
            }
            this.isPhyiscsLoaded = false
        }

        /**
         * Add entity to physics Engine
         * @param {PhysicsEngine} physicsEngine
         */
        loadPhysics(physicsEngine) {
            if (!this.isPhyiscsLoaded) {
                physicsEngine.add(this)
                this.isPhyiscsLoaded = true
            }
        }

        /**
         * Check if point is inside the entity (using size)
         * Method can be overwrite by the sub-entities for more precision
         * @param {{x: number, y: number}} point absolute coordinate
         */
        includes(point) {
            const vertices = this.generateVertices()
            return Vertex.contains(vertices, this.fromAbsolutePosition(point))
        }

        /**
         * @return {{x: number, y: number}[]}
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
         * @return {{x: number, y: number}[]}
         */
        generateVertices() {
            const {width: mWidth, height: mHeight} = this.getLargestRectangle(this.rotation, this.size)
            const center = {x: this.size.width / 2, y: this.size.height / 2}
            const mCenter = {x: mWidth / 2, y: mHeight / 2}

            let vertices = this.loadVertices()
            vertices = Vertex.translate(vertices, center, -1)
            vertices = Vertex.rotate(vertices, this.rotation, {x: 0, y: 0})
            vertices = Vertex.translate(vertices, mCenter)

            return vertices
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
            return this.isValid() && !this.locked && this.visible
        }

        /**
         * is the generate hook must be disabled
         */
        isCanGenerate() {
            return super.isVisible()
        }

    }

    /**
     * @typedef {{center: {x: number, y: number}, context: OffscreenCanvasRenderingContext2D}} DataContext
     */


    return Entity
})