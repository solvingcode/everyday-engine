define(function (require) {

    const RectEntity = require('../shape/RectEntity.js')
    const StateManager = require('../../../state/StateManager.js')

    class SelectorEntity extends RectEntity {

        constructor(props) {
            super(props)
            this.selectable = false
        }

        /**
         * @override
         */
        build(world) {
            if(!StateManager.get().isProgress('ACTION_MOVE')) {
                super.build(world)
            }
            return false
        }

    }

    return SelectorEntity
})