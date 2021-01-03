define(function (require) {

    const LineEntity = require('../shape/LineEntity.js')

    /**
     * Attach Entity (abstract class) used to attach two entities
     * Different type of attach are possible (joint, point, ...)
     * @abstract
     */
    class AttachEntity extends LineEntity {

        constructor(props) {
            const physics = { 
                stiffness: 1,
                angleA: null,
                angleB: null,
                angularStiffness: null}
            super({...props, physics})
            this.shape = LineEntity.shapes.ATTACH
        }

    }

    return AttachEntity
})