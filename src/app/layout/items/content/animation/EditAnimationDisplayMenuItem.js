import PanelMenuItem from '../../panel/PanelMenuItem.js'
import World from '../../../../world/World.js'
import AssetImageViewMenuItem from '../../assets/AssetImageViewMenuItem.js'

export default class EditAnimationDisplayMenuItem extends PanelMenuItem {

    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     * @param {number} time
     */
    constructor(parent, animation, time = 0) {
        super({
            name: '',
            zone: parent.zone
        })
        this.setData({bind: {animation, time}})
    }

    /**
     * @override
     */
    setData(data) {
        const {animation, time} = data.bind
        const keyFrame = animation.tryGetAt(time)
        if (keyFrame) {
            const asset = World.get().getAssetsManager().findAssetImageById(keyFrame.getAssetId())
            this.items = [
                new AssetImageViewMenuItem(this, asset)
            ]
        }
    }

}