import Layout from '../../../Layout.js'
import TextMenuItem from '../../basic/TextMenuItem.js'
import ListSelectElementMenuItem from '../../list/ListSelectElementMenuItem.js'
import EditAnimationPropertyFrameListMenuItem from './EditAnimationPropertyFrameListMenuItem.js'

export default class EditAnimationTimelineElementMenuItem extends ListSelectElementMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {{bind: PropertyTimeline}} data
     */
    constructor(parent, data) {
        super(parent, data, {
            name: 'image',
            type: Layout.type.LIST_ELEMENT,
            stateCode: ''
        })
        this.items = []
        this.setData(data)
    }

    /**
     * @override
     */
    setData(data) {
        if(!_.isEqual(data.bind, this.data.bind) || !this.items.length){
            this.items = [
                new TextMenuItem(this, data.bind.getName()),
                new EditAnimationPropertyFrameListMenuItem(this, data.bind)
            ]
        }
        super.setData(data)
    }

    /**
     * @return {string}
     */
    getName() {
        return ''
    }
}