define(function () {

    /**
     * @class {PhysicError}
     * @extends {Error}
     */
    class PhysicError extends Error{

        constructor(message) {
            super(message)
        }

    }

    return PhysicError

})