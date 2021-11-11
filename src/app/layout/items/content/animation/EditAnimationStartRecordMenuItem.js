import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'

export default class EditAnimationStartRecordMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     * @param {Unit} unit
     */
    constructor(parent, animation, unit) {
        super({
            name: 'circle',
            title: 'Start Recording',
            stateCode: 'ACTION_EDIT_ANIMATION_START_RECORD',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {animation, unit}
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && !World.get().getAnimationManager().getAnimationRecording()
    }
}
