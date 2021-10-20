import Layout from '../../../Layout.js'
import AssetImageViewMenuItem from '../../assets/AssetImageViewMenuItem.js'
import World from '../../../../world/World.js'
import TextMenuItem from '../../basic/TextMenuItem.js'
import ListSelectElementMenuItem from '../../list/ListSelectElementMenuItem.js'

export default class EditAnimationElementMenuItem extends ListSelectElementMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            name: 'image',
            type: Layout.type.LIST_ELEMENT,
            stateCode: ''
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

}