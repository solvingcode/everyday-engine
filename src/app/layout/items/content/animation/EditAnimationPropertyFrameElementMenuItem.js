import Layout from '../../../Layout.js'
import TextMenuItem from '../../basic/TextMenuItem.js'
import ListSelectElementMenuItem from '../../list/ListSelectElementMenuItem.js'

export default class EditAnimationPropertyFrameElementMenuItem extends ListSelectElementMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {{bind: TimeDuration}} data
     */
    constructor(parent, data) {
        super(parent, data, {
            name: 'image',
            type: Layout.type.LIST_ELEMENT,
            stateCode: 'ACTION_SELECT_LIST_TIMELINE'
        })
        this.items = [
            new TextMenuItem(this, data.bind.getName())
        ]
    }

    /**
     * @return {string}
     */
    getName() {
        return ''
    }
}