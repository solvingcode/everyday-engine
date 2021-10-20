import Layout from '../../../Layout.js'
import ListSelectElementMenuItem from '../../list/ListSelectElementMenuItem.js'
import TextMenuItem from '../../basic/TextMenuItem.js'

export default class EditAnimationPropertyElementMenuItem extends ListSelectElementMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AnimationProperty} data
     */
    constructor(parent, data) {
        super(parent, data, {
            name: 'image',
            type: Layout.type.LIST_ELEMENT,
            stateCode: 'ACTION_SELECT_LIST_ANIMATION_PROPERTY'
        })
        this.items = [
            new TextMenuItem(this, data.getName())
        ]
    }

}