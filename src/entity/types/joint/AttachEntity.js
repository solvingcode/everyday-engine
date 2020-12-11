define(function (require) {

    const EntityMotion = require('../../EntityMotion.js')

    /**
     * Attach Entity (abstruct class) used to attach two entities
     * Different type of attach are possible (joint, point, ...)
     * @abstract
     */
    class AttachEntity extends EntityMotion {

        constructor(props) {
            const physics = { 
                stiffness: 1,
                angleA: null,
                angleB: null,
                angularStiffness: null}
            super({...props, physics})
            this.shape = EntityMotion.shapes.ATTACH
        }

    }

    return AttachEntity
})