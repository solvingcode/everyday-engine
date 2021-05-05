import Content from './Content.js'
import AssetScriptCode from '../asset/types/script/AssetScriptCode.js'
import SystemError from '../exception/type/SystemError.js'
import World from '../world/World.js'

export default class EditScriptCodeContent extends Content{

    /**
     * @param {Asset} data
     */
    constructor(data) {
        if(data instanceof AssetScriptCode){
            throw new SystemError(`Content data must be of type "AssetScriptCode"`)
        }
        super(data && data.getId())
    }

    /**
     * @return {Asset}
     */
    getData() {
        return World.get().getAssetsManager().findAssetById(this.getDataContentId())
    }

}