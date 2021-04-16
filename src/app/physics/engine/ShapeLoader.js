import Entity from '../../entity/Entity.js'
import RectangleShape from './matter/shapes/RectangleShape.js'
import EllipseShape from './matter/shapes/EllipseShape.js'
import PolyShape from './matter/shapes/PolyShape.js'
import CircleShape from './matter/shapes/CircleShape.js'
import JointShape from './matter/shapes/JointShape.js'
import Shape from './Shape.js'

/**
 * Shape Loader class
 * Manage and load shapes
 *
 * @property {Object<string, Shape>} mapShapes
 */
class ShapeLoader {

    constructor(physicEngine) {
        this.mapShapes = {
            [Entity.shapes.RECT]: RectangleShape,
            [Entity.shapes.ELLIPSE]: EllipseShape,
            [Entity.shapes.POLY]: PolyShape,
            [Entity.shapes.CIRCLE]: CircleShape,
            [Entity.shapes.ATTACH]: JointShape
        }
        this.physicEngine = physicEngine
    }

    /**
     * Load entity shape to the Engine world
     * @param {Entity} entity
     * @param {World} world
     *
     * @return {ContentMenuItem}
     */
    load(entity, world) {
        if (!this.mapShapes.hasOwnProperty(entity.shape)) {
            throw new TypeError(`Shape ${entity.shape} is not configured`)
        }
        const type = this.mapShapes[entity.shape]
        return type && Shape.get(type, this.physicEngine).load(entity, world)
    }

    /**
     * Update the physics props from entity
     * @param {Entity} entity
     */
    update(entity) {
        const type = this.mapShapes[entity.shape]
        const body = this.physicEngine.getBodyFromEntity(entity)
        return Shape.get(type).update(entity, body)
    }

}

export default ShapeLoader