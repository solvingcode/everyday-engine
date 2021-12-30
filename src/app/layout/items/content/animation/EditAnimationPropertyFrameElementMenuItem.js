import Layout from '../../../Layout.js'
import ListSelectElementMenuItem from '../../list/ListSelectElementMenuItem.js'
import EditAnimationPropertyFrameButtonMenuItem from './EditAnimationPropertyFrameButtonMenuItem.js'
import TextMenuItem from '../../basic/TextMenuItem.js'

export default class EditAnimationPropertyFrameElementMenuItem extends ListSelectElementMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {{bind: TimeDuration}} data
     */
    constructor(parent, data) {
        super(parent, data, {
            name: 'image',
            type: Layout.type.LIST_ELEMENT,
            dragStateCode: 'ACTION_ATTACH_FRAME',
            stateCode: 'ACTION_SELECT_LIST_TIMELINE'
        })
    }

    /**
     * @override
     */
    doSetData(data) {
        if(!_.isEqual(data.bind, this.data.bind) || !this.items.length){
            if(data.bind.getFrame()){
                this.items = [
                    new EditAnimationPropertyFrameButtonMenuItem(this, data.bind.getAnimation(), data.bind.getFrame())
                ]
            }else if(!data.bind.getProperty()){
                this.items = [
                    new TextMenuItem(this, data.bind.getName())
                ]
            }
        }
    }

    /**
     * @return {string}
     */
    getName() {
        return ''
    }

    /**
     * @override
     */
    isDraggable() {
        return true
    }
}