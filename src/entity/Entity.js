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
            this.isBuffered = false
            this.isPhyiscsLoaded = false
            this.size = props.size || 1
            this.pixels = []
            this.mesh = new Mesh(this.position, this.size)
        }

        /**
         * Build the Entity (define pixels, set properties ...)
         */
        build() {
            throw new TypeError('"build" method must be implemented')
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
         * Set new position for the Mesh
         * @param {Object} position 
         */
        setMeshPosition(position) {
            this.mesh.position = position
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
         * Update pixels using information in a specific context
         * @param {CanvasRenderingContext2D} data 
         * @param {int} sw
         * @param {int} sh
         */
        setPixelsByContext(context, sw, sh) {
            const data = context.getImageData(0, 0, sw, sh).data
            for (var iData = 0; iData < data.length; iData += 4) {
                this.pixels[iData / 4] = [data[iData], data[iData + 1], data[iData + 2], data[iData + 3]]
            }
        }

        /**
         * Clear the buffer and the Mesh
         */
        clearBuffer() {
            this.isBuffered = false
            this.mesh.clear(this.size)
        }

        /**
         * Add pixels built to the Mesh
         */
        addToBuffer() {
            if (!this.isBuffered) {
                this.mesh.add(this.pixels)
                this.isBuffered = true
                return true
            }
            return false
        }

        /**
         * Add entity to physics Engine
         * @param {PhysicsEngine} physicsEngine 
         */
        addToPhyiscs(physicsEngine) {
            if (!this.isPhyiscsLoaded) {
                physicsEngine.add(this)
                this.isPhyiscsLoaded = true
            }
        }
    }

    Entity.shapes = {
        ELLIPSE: 'Ellipse',
        RECT: 'Rect',
        LINE: 'Line',
        POLY: 'Poly'
    }

    return Entity
})