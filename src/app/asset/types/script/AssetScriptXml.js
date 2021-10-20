import World from '../../../world/World.js'
import AssetScript from './AssetScript.js'
import EditGraphScriptContent from '../../../content/script/EditGraphScriptContent.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import FileHelper from '../../../utils/FileHelper.js'
import XmlHelper from '../../../utils/XmlHelper.js'

export default class AssetScriptXml extends AssetScript{

    /**
     * @type {Document}
     */
    data

    constructor() {
        super()
        this.data = null
    }

    /**
     * @override
     */
    open(asset) {
        const tabManager = World.get().getTabManager()
        tabManager.createOrActivate(asset.getName(), new EditGraphScriptContent(asset))
    }

    /**
     * @return {AScript}
     */
    parse(){
        return World.get().getScriptManager().load(this.data)
    }

    /**
     * @override
     */
    validate(data, world){
        return data.getFunctions().every(func => ScriptHelper.validate(func, world))
    }

    /**
     * @override
     */
    rename(oldName, newName){
        if(this.data){
            World.get().getScriptManager().rename(this.data, oldName, newName)
        }
    }

    /**
     * @override
     */
    export(asset) {
        FileHelper.save(this.getDataUrl(), FileHelper.type.XML, asset.getName())
    }

    /**
     * @override
     * @param {Document} data
     */
    setData(data){
        this.data = data
    }

    /**
     * @override
     * @return {Document}
     */
    getData(){
        return this.data
    }

    /**
     * @override
     */
    async setDataUrl(dataUrl) {
        const doc = XmlHelper.parse(dataUrl)
        if(!(doc instanceof Document)){
            this.setError(`Script XML Parser: ${doc}`)
        }else{
            this.setError('')
            this.data = doc
        }
    }

    /**
     * @override
     */
    getDataUrl() {
        return (new XMLSerializer()).serializeToString(this.data)
    }

}