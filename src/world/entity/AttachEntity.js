define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')
    const AppState = require('../../core/AppState.js')

    class AttachEntity extends EntityMotion {

        isGenerateDisabled(){
            return AppState.get().hasState('SIMULATE_PROGRESS')
        }

    }

    return AttachEntity
})