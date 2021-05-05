import Content from './Content.js'
import AssetScriptXml from '../asset/types/script/AssetScriptXml.js'
import SystemError from '../exception/type/SystemError.js'
import World from '../world/World.js'

export default class EditScriptContent extends Content{

    /**
     * @param {Asset} data
     */
    constructor(data) {
        if(data instanceof AssetScriptXml){
            throw new SystemError(`Content data must be of type "AssetScriptXml"`)
        }
        super(data.getId())
    }

    /**
     * @return {Asset}
     */
    getData() {
        return World.get().getAssetsManager().findAssetById(this.getDataContentId())
    }

}