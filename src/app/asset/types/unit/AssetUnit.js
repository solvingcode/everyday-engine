import AssetType from '../AssetType.js'
import XmlHelper from '../../../utils/XmlHelper.js'
import FileHelper from '../../../utils/FileHelper.js'

export default class AssetUnit extends AssetType{

    /**
     * @type {Document}
     */
    data

    /**
     * @type {string}
     */
    error

    /**
     * @param {string} error
     */
    setError(error){
        this.error = error
    }

    /**
     * @return {string}
     */
    getError(){
        return this.error
    }

    /**
     * @override
     */
    async load(data, asset) {
        await this.setDataUrl(data)
        return true
    }

    /**
     * @param {Document} data
     */
    setData(data){
        this.data = data
    }

    /**
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
            this.setError(`Unit XML Parser: ${doc}`)
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

    /**
     * @return {Unit}
     */
    parse(){
    }

    /**
     * @override
     * @param {Unit} unit
     * @param {Asset} asset
     */
    async generate(unit, asset){
    }

    /**
     * @override
     */
    open(asset, options) {
    }

    /**
     * @override
     */
    rename(oldName, newName) {
    }

    /**
     * @override
     */
    export(asset) {
        FileHelper.save(this.getDataUrl(), FileHelper.type.XML, asset.getName())
    }

    validate(data) {
        return true
    }
}