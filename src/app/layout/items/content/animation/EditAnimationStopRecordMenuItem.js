import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'

export default class EditAnimationStopRecordMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     */
    constructor(parent, animation) {
        super({
            name: 'stop-circle',
            title: 'Stop Recording',
            stateCode: 'ACTION_EDIT_ANIMATION_STOP_RECORD',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {animation}
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && !!World.get().getAnimationManager().getAnimationRecording()
    }
}
