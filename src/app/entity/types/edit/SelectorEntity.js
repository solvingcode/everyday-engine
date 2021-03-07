import RectEntity from '../shape/RectEntity.js'
import StateManager from '../../../state/StateManager.js'
import MoveAction from '../../../runner/action/edit/MoveAction.js'

class SelectorEntity extends RectEntity {

    constructor(props) {
        super(props)
        this.selectable = false
        this.props.getStyle().setBorderSize(3)
        this.props.getStyle().setColor('#FFFFFF')
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