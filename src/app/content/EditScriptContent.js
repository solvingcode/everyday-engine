import Content from './Content.js'
import AssetScriptXml from '../asset/types/script/AssetScriptXml.js'

export default class EditScriptContent extends Content{

    /**
     * @param {Asset} data
     */
    constructor(data) {
        if(data instanceof AssetScriptXml){
            throw new TypeError(`Content data must be of type "AssetScriptXml"`)
        }
        super(data)
    }

    /**
     * @return {Asset}
     */
    getData() {
        return super.getData()
    }

}