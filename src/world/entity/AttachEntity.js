define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')
    const AppState = require('../../core/AppState.js')

    /**
     * Attach Entity (abstruct class) used to attach two entities
     * Different type of attach are possible (joint, point, ...)
     * @abstract
     */
    class AttachEntity extends EntityMotion {

        /**
         * @inheritdoc
         */
        isCanGenerate() {
            return super.isCanGenerate() && !AppState.get().hasState('SIMULATE_PROGRESS')
        }

        /**
         * @inheritdoc
         */
        clone() {
            return null
        }

    }

    return AttachEntity
})