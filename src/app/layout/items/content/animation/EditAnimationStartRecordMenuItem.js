import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'

export default class EditAnimationStartRecordMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     */
    constructor(parent, animation) {
        super({
            name: 'circle',
            title: 'Start Recording',
            stateCode: 'ACTION_EDIT_ANIMATION_START_RECORD',
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
        return super.isValid() && !World.get().getAnimationManager().getAnimationRecording()
    }
}
