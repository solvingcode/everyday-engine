import Content from './Content.js'
import AssetScriptXml from '../asset/types/script/AssetScriptXml.js'
import ScriptGraph from '../flow/graph/ScriptGraph.js'
import World from '../world/World.js'
import SystemError from '../exception/type/SystemError.js'

export default class EditGraphScriptContent extends Content{

    /**
     * @param {Asset} data
     */
    constructor(data) {
        if(data instanceof AssetScriptXml){
            throw new SystemError(`Content data must be of type "AssetScriptXml"`)
        }
        super(data)
        const script = World.get().getScriptManager().findByName(data.getName())
        ScriptGraph.get().init(script)
    }

    /**
     * @return {Asset}
     */
    getData() {
        return super.getData()
    }

}