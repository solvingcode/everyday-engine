import ListMenuItem from '../../list/ListMenuItem.js'
import EditAnimationPropertyFrameElementMenuItem from './EditAnimationPropertyFrameElementMenuItem.js'

export default class EditAnimationPropertyFrameListMenuItem extends ListMenuItem {

    /**
     * @param {MenuItem} parent
     * @param {PropertyTimeline} propertyTimeline
     */
    constructor(parent, propertyTimeline) {
        super({
            stateCode: '',
            name: '',
            zone: parent.zone
        })
        this.data = {propertyTimeline}
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return EditAnimationPropertyFrameElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.propertyTimeline.getTimeline()
    }

    /**
     * @override
     */
    getActions(bindObject) {
        return []
    }

}