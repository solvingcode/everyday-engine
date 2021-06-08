import ListElementMenuItem from '../../list/ListElementMenuItem.js'
import Layout from '../../../Layout.js'
import AssetImageViewMenuItem from '../../assets/AssetImageViewMenuItem.js'
import World from '../../../../world/World.js'
import TextMenuItem from '../../basic/TextMenuItem.js'

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
        const timelines = data.list
        const timeline = data.bind
        const second = 0
        const time = timelines.findIndex(pTime => pTime === timeline)
        const timeSecond = `${second}:${time < 10 ? '0' : ''}${time}`
        this.items = [
            new TextMenuItem(this, timeSecond)
        ]
        if (timeline && timeline.getFrame()) {
            const frame = timeline.getFrame()
            const asset = World.get().getAssetsManager().findAssetImageById(frame.getAssetId())
            this.items.push(
                new AssetImageViewMenuItem(this, asset)
            )
        }
    }

    /**
     * @override
     */
    isSelected() {
        return this.getDataBind().isSelected()
    }

}