import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import AssetAudio from '../../../../asset/types/Audio/AssetAudio.js'

export default class PlayAssetAudioMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'play-circle',
            title: 'Play audio',
            stateCode: 'ACTION_PLAY_ASSET_AUDIO',
            type: Layout.type.ICON_TEXT,
            zone: parent ? parent.zone : Layout.zone.WINDOW
        })
        this.parent = parent
    }

    /**
     * @override
     */
    isValid() {
        const selectedAsset = World.get().getAssetsManager().getSelectedAsset()
        return super.isValid() && selectedAsset &&
            (selectedAsset.getType() instanceof AssetAudio) && !selectedAsset.getType().isPlaying()
    }
}
