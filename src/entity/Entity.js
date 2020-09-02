define(function (require) {

    const Mesh = require('../core/Mesh.js')
    const Window = require('../core/Window.js')

    /**
     * Abstract Entity class
     */
    class Entity {
        constructor(props) {
            if (this.constructor === Entity) {
                throw new TypeError('Abstract class Entity cannot be instantiated directly')
            }
            this.props = props
            this.position = props.position
            this.rotation = props.rotation || 0
            this.isBuffered = false
            this.isPhyiscsLoaded = false
            this.size = props.size || 1
            this.mesh = new Mesh(this.position, this.size)
        }

        /**
         * Build the Entity (generate mesh, set properties ...)
         */
        build() {
            throw new TypeError('"build" method must be implemented')
        }

        /**
         * Generate mesh
         */
        generate(...params) {
            throw new TypeError('"generate" method must be implemented')
        }

        /**
         * Close the build of the Entity
         */
        close() {
            this.position = this.mesh.position
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
         * @param {Integer} angle 
         */
        setRotation(angle) {
            if (this.rotation !== angle) {
                this.rotation = angle
                if (this.clearBuffer()) {
                    this.generate()
                }
            }
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
         */
        toCenterPosition() {
            throw new TypeError('"toCenterPosition" method must be implemented')
        }

        /**
         * Get current position from center position
         */
        fromCenterPosition(position) {
            throw new TypeError('"fromCenterPosition" method must be implemented')
        }

        /**
         * Convert relative coordinate to absolute coordinate
         * @param {Object} point Relative coordinate
         */
        toAbsolutePosition(point) {
            return {
                x: point.x + this.position.x,
                y: point.y + this.position.y
            }
        }

        /**
         * Convert absolute coordinate to relative coordinate
         * based to the center of the object
         * @param {Object} point Absolute coordinate
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
         * @param {Object} point Absolute coordinate
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
         * @return {Object}
         */
        setMeshPositionByDragDistance() {
            const window = Window.get()
            const dragDistance = window.mouse.getDragDistance()
            var newX = window.mouse.position.x
            var newY = window.mouse.position.y
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
         * Update the mesh from a given context
         * @param {CanvasRenderingContext2D} context 
         */
        updateMeshFromContext(context) {
            const sw = context.canvas.width, sh = context.canvas.height
            if (sw && sh) {
                this.mesh.clear({ width: sw, height: sh })
                this.mesh.copy(context.canvas, 0, 0, sw, sh)
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
         * Method can be overwride by the subentities for more precision
         * @param {Object} point absolute coordinate
         */
        includes(point) {
            return point.x >= this.position.x &&
                point.x <= this.position.x + this.size.width &&
                point.y >= this.position.y &&
                point.y <= this.position.y + this.size.height
        }
    }

    Entity.shapes = {
        ELLIPSE: 'Ellipse',
        RECT: 'Rect',
        LINE: 'Line',
        POLY: 'Poly',
        CIRCLE: 'Circle'
    }

    return Entity
})