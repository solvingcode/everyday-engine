import Content from '../Content.js'
import World from '../../world/World.js'

export default class EditGraphScriptContent extends Content{

    /**
     * @param {Asset} data
     */
    constructor(data) {
        super(data && data.getId())
    }

    /**
     * @return {Asset}
     */
    getData() {
        return World.get().getAssetsManager().findAssetById(this.getDataContentId())
    }

}