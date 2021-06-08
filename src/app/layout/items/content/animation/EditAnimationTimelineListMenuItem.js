import ListMenuItem from '../../list/ListMenuItem.js'
import EditAnimationTimelineElementMenuItem from './EditAnimationTimelineElementMenuItem.js'

export default class EditAnimationTimelineListMenuItem extends ListMenuItem{

    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     * @param {number} time
     */
    constructor(parent, animation, time = 0) {
        super({
            name: '',
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
        const {animation} = this.data
        return animation.getTimeline()
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}