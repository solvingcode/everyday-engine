define(function (require) {

    const Mesh = require('./Mesh.js')

    class Entity {
        constructor(props) {
            this.position = props.position
            this.isBuffered = false
            this.size = props.size
            this.pixels = new Array(Math.pow(this.size, 2))
            this.pixels.fill(255)
            this.mesh = new Mesh(this.position, this.size)
        }

        update() {
            this.addToBuffer()
        }

        draw(renderer) {
            if (this.isBuffered) {
                renderer.draw(this)
            }
        }

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