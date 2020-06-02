define(function (require) {

    const Mesh = require('./Mesh.js')

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
         * Update the mesh
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
    }

    return Entity
})