import ListMenuItem from '../../list/ListMenuItem.js'
import EditAnimationTimelineElementMenuItem from './EditAnimationTimelineElementMenuItem.js'

export default class EditAnimationTimelineMenuItem extends ListMenuItem{

    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     * @param {number} time
     */
    constructor(parent, animation, time = 0) {
        super({
            name: 'Animation',
            zone: parent.zone
        })
        this.data = {animation, time}
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return EditAnimationTimelineElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.animation.getFrames()
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}