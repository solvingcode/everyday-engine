define(function (require) {

    const Mesh = require('../core/Mesh.js')
    const Window = require('../core/Window.js')
    const Keyboard = require('../core/Keyboard.js')
    const Maths = require('../utils/Maths.js')

    /**
     * Abstract Entity class
     * @abstract
     * @todo Think to use a MeshManager for performance
     *
     * @property {Mesh} mesh
     * @property {number} id
     *
     * @typedef {{color: string, fillColor: string}} Style
     * @typedef {{style: Style, name: string,
     *      position: {x: number, y: number},
     *      rotation: number,
     *      size: {width: number, height: number} | number
     *      }} EntityProps
     */
    class Entity {
        /**
         * @param {EntityProps} props
         */
        constructor(props) {
            if (this.constructor === Entity) {
                throw new TypeError('Abstract class Entity cannot be instantiated directly')
            }
            props.style = props.style || { color: '#000000' }
            this.id = Maths.generateId()
            this.props = props
            this.name = props.name
            this.position = props.position
            this.rotation = props.rotation || 0
            this.isBuffered = false
            this.isPhyiscsLoaded = false
            this.size = props.size || 1
            this.mesh = new Mesh(this.position, this.size)
            this.selectable = true
            this.selected = false
            this.focused = false
            this.locked = false
            this.visible = true
            this.style = props.style
            this.attachedEntities = null
        }

        /**
         * Build the Entity (generate mesh, set properties ...)
         */
        build() {
            throw new TypeError('"build" method must be implemented')
        }

        /**
         * End the build of the Entity
         */
        end() { }

        /**
         * Generate mesh
         */
        generateMesh() {
            throw new TypeError('"generateMesh" method must be implemented')
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
         * Set the entity's position
         * @param {Object} position 
         */
        setPosition(position) {
            this.position = position
            this.mesh.position = position
        }

        /**
         * Set the entity's rotation
         * @param {Number} angle
         */
        setRotationAndGenerate(angle) {
            if (this.rotation !== angle) {
                this.rotation = angle
                this.regenerate()
            }
        }

        /**
         * Set the entity's style
         * @param {Style} style
         */
        setStyleAndGenerate(style) {
            this.style = style
            this.regenerate()
        }

        /**
         * Select the current entity (apply styles, ...)
         */
        select() {
            this.selected = true
            this.setStyleAndGenerate({ color: '#FF00FF', fillColor: 'rgba(255, 0, 255, 0.2)' })
        }

        /**
         * Focus the current entity (apply styles, ...)
         */
        focus() {
            this.focused = true
            !this.selected && this.setStyleAndGenerate({ color: '#000000', fillColor: 'rgba(0, 0, 0, 0.1)' })
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
         * @param {Boolean} visible
         */
        show(visible) {
            this.visible = visible
        }

        /**
         * Get the base style (use as default)
         */
        getStyle() {
            const styleLocked = { color: '#AAAAAA', fillColor: 'rgba(0, 0, 0, 0.01)' }
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
         * Convert current position to center position
         * @abstract
         */
        toCenterPosition() {
            throw new TypeError('"toCenterPosition" method must be implemented')
        }

        /**
         * Get current position from center position
         * @param {Vector} position
         * @abstract
         */
        fromCenterPosition(position) {
            throw new TypeError('"fromCenterPosition" method must be implemented')
        }

        /**
         * Move current entity from point A to B
         * @param {Vector} pointA absolute position
         * @param {Vector} pointB absolute position
         */
        movePointTo(pointA, pointB) {
            const x = this.position.x + pointB.x - pointA.x
            const y = this.position.y + pointB.y - pointA.y
            this.setPosition({ x, y })
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
         * @param {Vector} point Absolute coordinate
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
            const { x, y } = this.toCenterPosition()
            return {
                x: point.x - x,
                y: point.y - y
            }
        }

        /**
         * Convert relative coordinate (based to the center) to absolute coordinate
         * @param {Vector} point Absolute coordinate
         */
        fromRelativeCenterPosition(point) {
            const { x, y } = this.toCenterPosition()
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
            let newX = window.mouse.position.x
            let newY = window.mouse.position.y
            if (dragDistance.x <= 0) {
                newX = window.mouse.currentPosition.x
            }
            if (dragDistance.y <= 0) {
                newY = window.mouse.currentPosition.y
            }
            this.setMeshPosition({ x: newX, y: newY })
            return dragDistance
        }

        /**
         * Get the current position of the mouse
         */
        getCurrentMousePosition() {
            return Window.get().mouse.currentPosition
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
                this.mesh.clear({ width: sw, height: sh })
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
         */
        unloadPhysics() {
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
         * @param {Object} point absolute coordinate
         */
        includes(point) {
            return point.x >= this.position.x &&
                point.x <= this.position.x + this.size.width &&
                point.y >= this.position.y &&
                point.y <= this.position.y + this.size.height
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
            return this.visible
        }
    }

    Entity.shapes = {
        ELLIPSE: 'Ellipse',
        RECT: 'Rect',
        LINE: 'Line',
        POLY: 'Poly',
        CIRCLE: 'Circle',
        ATTACH: 'Attach'
    }

    return Entity
})