define(function () {

    class Shape {

        constructor(physicEngine){
            if (this.constructor === Shape) {
                throw new TypeError('Abstract class Shape cannot be instantiated directly')
            }
            this.physicEngine = physicEngine
        }

        /**
         * Get the body for the given entity
         * @param {Entity} entity 
         * @param {Bodies} bodies
         * @param {Constraint} constraint
         */
        get(entity, bodies, constraint) {
            throw new TypeError('"Shape.get" method must be implemented')
        }

        /**
         * Get the body physics from the entity
         * @param {Entity} entity 
         */
        getBodyFromEntity(entity){
            return this.physicEngine.getBodyFromEntity(entity)
        }

    }

    return Shape
})