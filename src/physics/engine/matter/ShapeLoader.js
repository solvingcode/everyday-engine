define(function (require) {

    const Entity = require('../../../entity/Entity.js')
    const RectangleShape = require('./shapes/RectangleShape.js')
    const EllipseShape = require('./shapes/EllipseShape.js')
    const PolyShape = require('./shapes/PolyShape.js')
    const CircleShape = require('./shapes/CircleShape.js')

    class ShapeLoader {

        constructor(){
            this.mapShapes = {
                [Entity.shapes.RECT]: RectangleShape,
                [Entity.shapes.ELLIPSE]: EllipseShape,
                [Entity.shapes.POLY]: PolyShape,
                [Entity.shapes.CIRCLE]: CircleShape,
                [Entity.shapes.LINE]: PolyShape
            }
        }

        /**
         * Load entity shape to the Engine world
         * @param {Entity} entity 
         * @param {Bodies} bodies
         */
        load(entity, bodies){
            return new (this.mapShapes[entity.shape])().get(entity, bodies)
        }

    }

    return ShapeLoader
})