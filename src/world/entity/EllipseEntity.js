define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')

    class EllipseEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.ELLIPSE
            this.center = null
            this.radius = 0
        }

        /**
         * @inheritdoc
         */
        build() {
            const dragDistance = this.setMeshPositionByDragDistance()
            this.size = { width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y) }
            if (this.clearBuffer()) {
                this.generate()
            }
        }

        /**
         * Generate pixels for a ellipse
         */
        generate() {
            const sw = this.size.width, sh = this.size.height
            const canvas = new OffscreenCanvas(sw, sh)
            const context = canvas.getContext('2d')
            const centerX = sw / 2
            const centerY = sh / 2
            const radiusX = sw / 2 > 2 ? sw / 2 - 2 : 0
            const radiusY = sh / 2 > 2 ? sh / 2 - 2 : 0
            this.center = { x: centerX, y: centerY }
            this.radius = { x: radiusX, y: radiusY }
            context.beginPath()
            context.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI)
            context.stroke()
            this.setPixelsByContext(context)
        }

    }

    return EllipseEntity
})