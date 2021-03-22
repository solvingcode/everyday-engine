import EntitySelector from '../../../manager/EntitySelector.js'
import AttachEntity from './AttachEntity.js'
import Vector from '../../../utils/Vector.js'
import Size from '../../../pobject/Size.js'

/**
 * @property {Vector[]} vertices relative positions for entities A & B
 */
class JointEntity extends AttachEntity {

    constructor(props = {}) {
        props.style = props.style || {color: '#0000FF'}
        super(props)
        this.vertices = [null, null]
        this.entityLinkIds = [null, null]
        this.attached = false
    }

    /**
     * @override
     */
    init(world) {
        const dragDistance = this.setMeshPositionByDragDistance(world)
        return this.generatePoints(dragDistance) && this.setConstraintEntities(world)
    }

    /**
     * Calculate the size of the canvas using the drag distance
     * @param {Vector} dragDistance
     * @return {Size}
     */
    calculateSize(dragDistance) {
        return new Size({width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y)})
    }

    /**
     * Generate vertices from drag distance
     */
    generatePoints(dragDistance) {
        this.size = this.calculateSize(dragDistance)
        if (this.size.width > 0 && this.size.height > 0) {
            this.clearBuffer()
            const pointX = Math.abs(dragDistance.x)
            const pointY = Math.abs(dragDistance.y)
            if (dragDistance.x * dragDistance.y < 0) {
                this.vertices = [new Vector({x: pointX, y: 0}), new Vector({x: 0, y: pointY})]
            } else {
                this.vertices = [new Vector({x: 0, y: 0}), new Vector({x: pointX, y: pointY})]
            }
            if (dragDistance.y < 0) {
                const point = this.vertices[0]
                this.vertices[0] = this.vertices[1]
                this.vertices[1] = point
            }
            return this.vertices[0] && this.vertices[1]
        }
        return false
    }

    /**
     * Find related entities using point a and b, and attach them to the constraint
     */
    setConstraintEntities(world) {
        const entitySelector = EntitySelector.get()
        const entityA = entitySelector.get(world, this.toAbsolutePosition(this.vertices[0]), AttachEntity)
        const entityB = entitySelector.getAll(world, this.toAbsolutePosition(this.vertices[1]), AttachEntity)
            .find(entity => entity !== entityA)
        if (entityA && !(entityA instanceof AttachEntity)) {
            this.entityLinkIds[0] = entityA.id
        }
        if (entityB && !(entityB instanceof AttachEntity)) {
            this.entityLinkIds[1] = entityB.id
        }
        if (entityA === entityB) {
            this.entityLinkIds[1] = null
        }

        if(entityA){
            entityA.attachedEntities = null
        }
        if(entityB){
            entityB.attachedEntities = null
        }

        return this.entityLinkIds[0] || this.entityLinkIds[1]
    }

    /**
     * Update vertices (A, B) from an absolute positions
     * @param {Vector} pointA absolute position
     * @param {Vector} pointB absolute position
     */
    updatePoints(pointA, pointB) {
        const dragDistance = new Vector({x: Math.floor(pointB.x - pointA.x), y: Math.floor(pointB.y - pointA.y)})
        if (this.generatePoints(dragDistance) && this.clearBuffer()) {
            let newX = pointA.x, newY = pointA.y
            if (dragDistance.x <= 0) {
                newX = pointB.x
            }
            if (dragDistance.y <= 0) {
                newY = pointB.y
            }
            this.setPosition(new Vector({x: parseInt(newX), y: parseInt(newY)}))
        }
    }

}

export default JointEntity