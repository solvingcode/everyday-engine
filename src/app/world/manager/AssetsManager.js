import AssetsManagerData from '../../project/data/AssetsManagerData.js'
import Asset from '../../assets/Asset.js'

/**
 * @class {AssetsManager}
 * @extends {AssetsManagerData}
 */
export default class AssetsManager extends AssetsManagerData {

    assets
    folders

    constructor() {
        super()
        this.assets = []
        this.folders = []
    }

    /**
     * @param {string} image
     */
    async setAsset(image) {
        const asset = new Asset({})
        if (await asset.load(image)) {
            this.assets.push(asset)
        }
    }

    /**
     * @param {Blob} blob
     */
    async setAssetByBlob(blob){
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => {
                resolve(reader.result)
            }
            reader.onerror = reject
            reader.readAsDataURL(blob)
        }).then(data => {
            return this.setAsset(data)
        })
    }

    /**
     * @return {null}
     */
    getAsset() {
        return null
    }

    /**
     * @return {Asset}
     */
    getSelectedAsset() {
        return this.getAssets().find(asset => asset.isSelected())
    }

    /**
     * @param {number|string} assetId
     * @return {Asset | null}
     */
    findAssetById(assetId) {
        return this.getAssets().find(asset => asset.id === parseInt(assetId))
    }

    /**
     * @param {number|string} folderId
     * @return {Folder | null}
     */
    findFolderById(folderId) {
        return this.getFolders().find(folder => folder.id === parseInt(folderId))
    }

    /**
     * @param {number|null} folderId
     * @return {Asset[]}
     */
    findAssetsByFolderId(folderId){
        return this.getAssets().filter(asset => asset.folderId === folderId)
    }

    /**
     * @param {number} folderId
     * @return {Folder[]}
     */
    findFolders(folderId){
        return this.getFolders().filter(folder => folder.folderId === folderId)
    }

}