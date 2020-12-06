define(function (require) {

    const EntityMotion = require('../../EntityMotion.js')
    const AppState = require('../../../state/AppState.js')

    /**
     * Attach Entity (abstruct class) used to attach two entities
     * Different type of attach are possible (joint, point, ...)
     * @abstract
     */
    class AttachEntity extends EntityMotion {

        constructor(props) {
            const physics = { 
                stiffness: 1, 
                angleAStiffness: 1, 
                angleBStiffness: 1, 
                angleAMin: - Math.PI * 2, 
                angleAMax: Math.PI * 2, 
                angleBMin: - Math.PI * 2, 
                angleBMax: Math.PI * 2 }
            super({...props, physics})
        }

        /**
         * @inherit
         */
        isCanGenerate() {
            return super.isCanGenerate() && !AppState.get().hasState('SIMULATE_PROGRESS')
        }

    }

    return AttachEntity
})