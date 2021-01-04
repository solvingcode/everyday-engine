define(function(){

    class PhysicsProps{

        velocity
        angularVelocity
        speed
        density
        force
        fixed
        motion

        /**
         * @param {number} velocity
         */
        setVelocity(velocity){
            this.velocity = velocity
        }

        /**
         * @param {number} angularVelocity
         */
        setAngularVelocity(angularVelocity){
            this.angularVelocity = angularVelocity
        }

        /**
         * @param {number} speed
         */
        setSpeed(speed){
            this.speed = speed
        }

        /**
         * @param {number} density
         */
        setDensity(density){
            this.density = density
        }

        /**
         * @param {number} force
         */
        setForce(force){
            this.force = force
        }

        /**
         * @param {boolean} fixed
         */
        setFixed(fixed){
            this.fixed = fixed
        }

        /**
         * @param {boolean} motion
         */
        setMotion(motion){
            this.motion = motion
        }

    }

    return PhysicsProps

})