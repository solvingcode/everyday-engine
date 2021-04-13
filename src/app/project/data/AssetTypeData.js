import Data from './Data.js'

export default class AssetTypeData extends Data{

    /**
     * @type {string}
     */
    dataUrl

    /**
     * @param {string} dataUrl
     */
    async setDataUrl(dataUrl){
        this.dataUrl = dataUrl
    }

    /**
     * @return {string}
     */
    async getDataUrl(){
        return this.dataUrl
    }

}