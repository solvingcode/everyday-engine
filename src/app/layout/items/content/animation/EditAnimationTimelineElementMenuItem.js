import ListElementMenuItem from '../../list/ListElementMenuItem.js'
import Layout from '../../../Layout.js'
import AssetImageViewMenuItem from '../../assets/AssetImageViewMenuItem.js'
import World from '../../../../world/World.js'
import EditAnimationTimerMenuItem from './EditAnimationTimerMenuItem.js'

export default class EditAnimationTimelineElementMenuItem extends ListElementMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            stateCode: '',
            name: 'image',
            type: Layout.type.LIST_ELEMENT
        })
    }

    /**
     * @override
     */
    setData(data) {
        super.setData(data)
        const keyframe = data.bind
        const asset = World.get().getAssetsManager().findAssetImageById(keyframe.getAssetId())
        this.items = [
            new AssetImageViewMenuItem(this, asset),
            new EditAnimationTimerMenuItem(this, keyframe)
        ]
    }

    /**
     * @override
     */
    isSelected() {
        return this.getDataBind().isSelected()
    }

}