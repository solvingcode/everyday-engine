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

    export default PhysicError

})