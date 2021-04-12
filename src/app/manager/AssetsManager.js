import AssetsManagerData from '../project/data/AssetsManagerData.js'
import Asset from '../asset/Asset.js'
import FileHelper from '../utils/FileHelper.js'
import AssetImage from '../asset/types/AssetImage.js'
import AssetScriptXml from '../asset/types/AssetScriptXml.js'

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
     * @param {string} data
     * @param {Class<AssetType>} type
     * @param {string} name
     */
    async setAsset(data, type, name) {
        const asset = new Asset({})
        asset.setType(new type())
        asset.setName(name)
        if (await asset.load(data)) {
            this.assets.push(asset)
        }
    }

    /**
     * @param {File} blob
     */
    async setAssetByBlob(blob){
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => {
                resolve(reader.result)
            }
            reader.onerror = reject
            if(this.isAssetImage(blob)){
                reader.readAsDataURL(blob)
            }else{
                reader.readAsText(blob)
            }
        }).then(data => {
            const type = this.getAssetType(blob)
            return this.setAsset(data, type, FileHelper.getFilename(blob.name))
        })
    }

    /**
     * @param {Blob} blob
     */
    isAssetImage(blob){
        const type = this.getAssetType(blob)
        return type === AssetImage
    }

    /**
     * @param {Blob} blob
     * @return {Class<AssetType>}
     */
    getAssetType(blob){
        const type = blob.type
        switch (type) {
            case FileHelper.type.IMG_JPEG:
            case FileHelper.type.IMG_PNG:
                return AssetImage
            case FileHelper.type.XML:
                return AssetScriptXml
            default:
                throw new TypeError(`Asset type "${type}" not supported`)
        }
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
     * @return {Asset[]}
     */
    getSelectedAssets() {
        return this.getAssets().filter(asset => asset.isSelected())
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
     * @param {number | null} folderId
     * @return {Folder[]}
     */
    findFolders(folderId){
        return this.getFolders().filter(folder => folder.folderId === folderId)
    }

    /**
     * @param {Folder} folder
     */
    addFolder(folder){
        this.folders.push(folder)
    }

}