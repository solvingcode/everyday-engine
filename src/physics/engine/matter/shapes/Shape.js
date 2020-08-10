define(function () {

    class Shape {

        constructor(){
            if (this.constructor === Shape) {
                throw new TypeError('Abstract class Shape cannot be instantiated directly')
            }
        }

        /**
         * Get the body for the given entity
         * @param {Entity} entity 
         * @param {Bodies} bodies
         */
        get(entity, bodies) {
            throw new TypeError('"Shape.get" method must be implemented')
        }

    }

    return Shape
})