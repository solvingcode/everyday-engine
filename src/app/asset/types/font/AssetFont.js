import AssetType from '../AssetType.js'

export default class AssetFont extends AssetType{

    /**
     * @type {FontFace}
     */
    data

    /**
     * @override
     */
    async load(fontDataUrl, asset) {
        await this.setDataUrl(`name=${asset.getName()}|url(${fontDataUrl})`)
        return true
    }

    /**
     * @param {FontFace} data
     */
    setData(data){
        this.data = data
    }

    /**
     * @return {FontFace}
     */
    getData(){
        return this.data
    }

    /**
     * @override
     */
    async setDataUrl(data) {
        await super.setDataUrl(data)
        const dataMatch = data.match(/^name=([^|]+)\|(.*)+/)
        if(dataMatch){
            const fontFace = new FontFace(dataMatch[1], dataMatch[2])
            this.data = await fontFace.load()
            document.fonts.add(this.data)
        }
    }

    async generate(source, asset) {
        return Promise.resolve(undefined)
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

    export(asset) {
        return undefined
    }

    validate(data) {
        return true
    }
}