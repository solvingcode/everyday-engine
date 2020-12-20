define(function (require) {

    const Entity = require('../../entity/Entity.js')
    const RectangleShape = require('./matter/shapes/RectangleShape.js')
    const EllipseShape = require('./matter/shapes/EllipseShape.js')
    const PolyShape = require('./matter/shapes/PolyShape.js')
    const CircleShape = require('./matter/shapes/CircleShape.js')
    const JointShape = require('./matter/shapes/JointShape.js')
    const Shape = require('./Shape.js')

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
         *
         * @return {Body}
         */
        load(entity) {
            if(!this.mapShapes.hasOwnProperty(entity.shape)) {
                throw new TypeError(`Shape ${entity.shape} is not configured`)
            }
            const type = this.mapShapes[entity.shape]
            return type && Shape.get(type, this.physicEngine).load(entity)
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

    return ShapeLoader
})