define(function (require) {
    
    import Shape from '../../Shape.js'

    class PolyShape extends Shape {

        /**
         * @override
         */
        generate(entity){
            const centerPosition = entity.toCenterPosition()
            const engine = this.getEngine()
            return engine.Bodies.fromVertices(centerPosition.x, centerPosition.y, entity.vertices)
        }

    }

    export default PolyShape
})