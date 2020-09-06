define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')
    const EntitySelector = require('../manager/EntitySelector.js')

    class SelectorEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.RECT
            this.selectable = false
            this.entitySelector = EntitySelector.get()
        }

        /**
         * @inheritdoc
         */
        build() {
            const dragDistance = this.setMeshPositionByDragDistance()
            this.size = { width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y) }
            if (this.clearBuffer() && !this.moveSelectedEntities(dragDistance)) {
                this.generate()
                this.selectEntities()
            }
            return false
        }

        /**
         * Move selected entities (not select new entities)
         * @param {Object} dragDistance
         */
        moveSelectedEntities(dragDistance) {
            const selectedEntities = this.entitySelector.getSelected()
            if (selectedEntities.length) {
                const triggerEntity = this.entitySelector.get(this.getCurrentMousePosition())
                const isEntityMove = triggerEntity && (
                    selectedEntities.includes(triggerEntity) || this.isMoving
                )
                if (isEntityMove) {
                    this.relativeEntityPositions = this.relativeEntityPositions ||
                        selectedEntities.map(entity => entity.fromAbsolutePosition(this.position))
                    this.isMoving = true
                    const targetPoint = { x: this.position.x + dragDistance.x, y: this.position.y + dragDistance.y }
                    selectedEntities.map((entity, index) => {
                        entity.moveRelativePointTo(this.relativeEntityPositions[index], targetPoint)
                    })
                    return true
                }
            }
            return false
        }

        /**
         * Select all entities within the area selection
         */
        selectEntities() {
            this.entitySelector.unselectAll()
            this.entitySelector.select(this.position)
        }

        /**
         * Generate mesh for the rect
         */
        generate() {
            const { width, height } = this.getLargestRectangle(this.rotation, this.size)
            if (width && height) {
                const center = { x: this.size.width / 2, y: this.size.height / 2 }
                const canvas = new OffscreenCanvas(width, height)
                const context = canvas.getContext('2d')
                context.strokeStyle = `${this.style.color}`
                context.beginPath()
                context.translate(width / 2, height / 2)
                context.rotate(this.rotation)
                context.translate(-center.x, -center.y)
                context.rect(0, 0, this.size.width, this.size.height)
                context.stroke()
                this.updateMeshFromContext(context)
            }
            return false
        }

        /**
         * Calculate the largest rectangle for given rotation and size
         * @param {Float} angleRadian 
         * @param {Object} size 
         */
        getLargestRectangle(angleRadian, size) {
            const cosA = Math.cos(angleRadian)
            const sinA = Math.sin(angleRadian)
            const points = [
                { x: 0, y: 0 },
                { x: size.width, y: 0 },
                { x: 0, y: size.height },
                { x: size.width, y: size.height }
            ]
            const rotatedPoints = points.map(({ x, y }) => ({
                x: x * cosA - y * sinA,
                y: x * sinA + y * cosA
            }))
            const minX = rotatedPoints.reduce((minX, current) => ((minX > current.x && current.x) || minX), rotatedPoints[0].x)
            const maxX = rotatedPoints.reduce((maxX, current) => ((maxX < current.x && current.x) || maxX), rotatedPoints[0].x)
            const minY = rotatedPoints.reduce((minY, current) => ((minY > current.y && current.y) || minY), rotatedPoints[0].y)
            const maxY = rotatedPoints.reduce((maxY, current) => ((maxY < current.y && current.y) || maxY), rotatedPoints[0].y)
            return {
                width: Math.ceil(maxX - minX),
                height: Math.ceil(maxY - minY)
            }
        }

        /**
         * @inherit
         */
        toCenterPosition() {
            return {
                x: this.position.x + this.mesh.size.width / 2,
                y: this.position.y + this.mesh.size.height / 2
            }
        }

        /**
         * @inherit
         */
        fromCenterPosition(position) {
            return {
                x: position.x - this.mesh.size.width / 2,
                y: position.y - this.mesh.size.height / 2
            }
        }

    }

    return SelectorEntity
})