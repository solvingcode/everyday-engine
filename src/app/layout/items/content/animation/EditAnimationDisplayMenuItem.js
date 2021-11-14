import World from '../../../../world/World.js'
import AssetImageViewMenuItem from '../../assets/AssetImageViewMenuItem.js'
import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class EditAnimationDisplayMenuItem extends MenuItem {

    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     */
    constructor(parent, animation) {
        super({
            name: 'asset-view',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        })
        this.data = {bind: {animation}}
        this.time = animation.getFrameTime()
        this.updateDisplay()
    }

    /**
     * @override
     */
    doUpdate() {
        const {animation} = this.data.bind
        if(animation.getFrameTime() !== this.time){
            this.updateDisplay()
            this.time = animation.getFrameTime()
            return true
        }
    }

    updateDisplay(){
        const {animation} = this.data.bind
        const keyFrame = animation.tryGetAt(animation.getFrameTime())
        if (keyFrame) {
            const asset = World.get().getAssetsManager().findAssetImageById(keyFrame.getAssetId())
            this.items = [
                new AssetImageViewMenuItem(this, asset)
            ]
        }
    }

    doSetData(data) {
    }
}