import ListMenuItem from '../../list/ListMenuItem.js'
import EditAnimationElementMenuItem from './EditAnimationElementMenuItem.js'

export default class EditAnimationListMenuItem extends ListMenuItem{

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
        return EditAnimationElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        const {animation} = this.data
        return animation
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}