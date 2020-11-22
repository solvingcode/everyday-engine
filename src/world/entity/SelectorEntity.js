define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')
    const EntitySelector = require('../manager/EntitySelector.js')
    const StateManager = require('../../state/StateManager.js')

    class SelectorEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.RECT
            this.selectable = false
            this.entitySelector = EntitySelector.get()
            this.stateManager = StateManager.get()
        }

        /**
         * @inherit
         */
        build() {
            const dragDistance = this.setMeshPositionByDragDistance()
            this.size = { width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y) }
            if (this.clearBuffer() && !this.moveSelectedEntities()) {
                this.generate()
                this.selectEntities()
            }
            return false
        }

        /**
         * Move selected entities (not select new entities)
         */
        moveSelectedEntities() {
            const selectedEntities = this.entitySelector.getSelected()
            if (selectedEntities.length) {
                const triggerEntity = this.entitySelector.get(this.getCurrentMousePosition())
                const isEntityMove = triggerEntity && selectedEntities.includes(triggerEntity)
                if (isEntityMove) {
                    this.stateManager.startState('ACTION_MOVE', 1)
                    return true
                } else {
                    this.stateManager.stopState('ACTION_MOVE', 1)
                }
            }
            return false
        }

        /**
         * Select all entities within the area selection
         */
        selectEntities() {
            this.entitySelector.unselectAll()
            this.entitySelector.select(this.mesh.position, this.size, this.isCtrlKeyPressed())
        }

        /**
         * Generate mesh for the rect
         */
        generateMesh() {
            const { width, height } = this.getLargestRectangle(this.rotation, this.size)
            if (width && height) {
                const center = { x: this.size.width / 2, y: this.size.height / 2 }
                const canvas = new OffscreenCanvas(width, height)
                const context = canvas.getContext(CANVAS_CONTEXT_TYPE)
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
         * @param {number} angleRadian
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
         * @override
         */
        toCenterPosition() {
            return {
                x: this.position.x + this.mesh.size.width / 2,
                y: this.position.y + this.mesh.size.height / 2
            }
        }

        /**
         * @override
         */
        fromCenterPosition(position) {
            return {
                x: position.x - this.mesh.size.width / 2,
                y: position.y - this.mesh.size.height / 2
            }
        }

        /**
         * @override
         */
        end() {
            this.stateManager.stopState('ACTION_MOVE', 1)
        }

    }

    return SelectorEntity
})