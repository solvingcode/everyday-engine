import RectEntity from '../shape/RectEntity.js'
import StateManager from '../../../state/StateManager.js'
import MoveAction from '../../../runner/action/edit/MoveAction.js'

class SelectorEntity extends RectEntity {

    constructor(props) {
        super(props)
        this.selectable = false
        this.props.style.borderSize = 3
        this.props.style.color = '#FFFFFF'
    }

    /**
     * @override
     */
    build(world) {
        if (!StateManager.get().isProgress(MoveAction.STATE)) {
            super.build(world)
        }
        return false
    }

}

export default SelectorEntity