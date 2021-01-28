define(function (require) {

    import RectEntity from '../shape/RectEntity.js'
    import StateManager from '../../../state/StateManager.js'

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

    export default SelectorEntity
})