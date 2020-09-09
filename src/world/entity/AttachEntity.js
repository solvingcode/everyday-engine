define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')
    const AppState = require('../../core/AppState.js')

    class AttachEntity extends EntityMotion {

        isGenerateDisabled() {
            return AppState.get().hasState('SIMULATE_PROGRESS')
        }

        /**
         * @inheritdoc
         */
        end() {
            if (this.entities.a && this.entities.b && this.attached) {
                this.entities.a.attachedTo = this.entities.b
            }
        }

    }

    return AttachEntity
})