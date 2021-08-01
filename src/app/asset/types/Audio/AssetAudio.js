import AssetType from '../AssetType.js'

export default class AssetAudio extends AssetType{

    /**
     * @type {HTMLAudioElement}
     */
    data

    /**
     * @override
     */
    async load(audioDataUrl, asset) {
        await this.setDataUrl(audioDataUrl)
        return true
    }

    /**
     * @param {HTMLAudioElement} data
     */
    setData(data){
        this.data = data
    }

    /**
     * @return {HTMLAudioElement}
     */
    getData(){
        return this.data
    }

    /**
     * @override
     */
    async setDataUrl(dataUrl) {
        await super.setDataUrl(dataUrl)
        this.data = new Audio(dataUrl);
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