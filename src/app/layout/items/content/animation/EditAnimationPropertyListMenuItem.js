import ListMenuItem from '../../list/ListMenuItem.js'
import EditAnimationPropertyElementMenuItem from './EditAnimationPropertyElementMenuItem.js'

export default class EditAnimationPropertyListMenuItem extends ListMenuItem{

    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     */
    constructor(parent, animation) {
        super({
            stateCode: '',
            name: '',
            zone: parent.zone
        })
        this.data = {animation}
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return EditAnimationPropertyElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        const {animation} = this.data
        return animation.getProperties()
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}