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
        this.time = animation.getTime()
        this.updateDisplay()
    }

    /**
     * @override
     */
    update() {
        super.update()
        const {animation} = this.data.bind
        if(animation.getTime() !== this.time){
            this.updateDisplay()
            this.time = animation.getTime()
        }
    }

    updateDisplay(){
        const {animation} = this.data.bind
        const keyFrame = animation.tryGetAt(animation.getTime())
        if (keyFrame) {
            const asset = World.get().getAssetsManager().findAssetImageById(keyFrame.getAssetId())
            this.items = [
                new AssetImageViewMenuItem(this, asset)
            ]
        }
    }

}