define(function (require) {

    const Entity = require('../../../entity/Entity.js')
    const RectangleShape = require('./shapes/RectangleShape.js')
    const EllipseShape = require('./shapes/EllipseShape.js')
    const PolyShape = require('./shapes/PolyShape.js')
    const CircleShape = require('./shapes/CircleShape.js')
    const JointShape = require('./shapes/JointShape.js')

    class ShapeLoader {

        constructor(physicEngine){
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
         * @param {Bodies} bodies
         * @param {Contraint} constraint
         */
        load(entity, bodies, constraint){
            return new (this.mapShapes[entity.shape])(this.physicEngine).get(entity, bodies, constraint)
        }

    }

    return ShapeLoader
})