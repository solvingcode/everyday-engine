import AssetsManagerData from '../project/data/AssetsManagerData.js'
import Asset from '../asset/Asset.js'
import FileHelper from '../utils/FileHelper.js'
import AssetImage from '../asset/types/AssetImage.js'
import AssetScriptXml from '../asset/types/AssetScriptXml.js'
import Folder from '../asset/Folder.js'

/**
 * @class {AssetsManager}
 * @extends {AssetsManagerData}
 */
export default class AssetsManager extends AssetsManagerData {

    /**
     * @private
     * @param {string} data
     * @param {Class<AssetType>} type
     * @param {string} name
     * @return {Asset}
     */
    async setAsset(data, type, name) {
        const folder = this.getSelectedFolder() || this.getRootFolder()
        const asset = new Asset(folder, {})
        asset.setType(new type())
        asset.setName(name)
        if (await asset.load(data)) {
            this.assets.push(asset)
            return asset
        }
    }

    /**
     * @param {string} data
     * @param {Class<AssetType>} assetType
     * @param {string} assetName
     * @param {number} folderId
     * @return {Asset}
     */
    async createAsset(data, assetType, assetName, folderId) {
        return this.setAsset(data, assetType, assetName)
    }

    /**
     * @param {File} blob
     */
    async setAssetByBlob(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => {
                resolve(reader.result)
            }
            reader.onerror = reject
            if (this.isAssetImage(blob)) {
                reader.readAsDataURL(blob)
            } else {
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
    isAssetImage(blob) {
        const type = this.getAssetType(blob)
        return type === AssetImage
    }

    /**
     * @param {Blob} blob
     * @return {Class<AssetType>}
     */
    getAssetType(blob) {
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
     * @return {Folder}
     */
    getSelectedFolder() {
        return this.getFolders().find(folder => folder.isSelected())
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
     * @param {string} name
     * @param {number} folderId
     * @return {Asset | null}
     */
    findAssetByName(name, folderId) {
        return this.getAssets().find(asset => asset.getName() === name && asset.getFolderId() === folderId)
    }

    /**
     * @param {number|string} folderId
     * @return {Folder | null}
     */
    findFolderById(folderId) {
        return this.getFolders().find(folder => folder.id === parseInt(folderId))
    }

    /**
     * @param {number|null} parentId
     * @return {Folder | null}
     */
    findFolderByParentId(parentId) {
        return this.getFolders().find(folder => folder.folderId === parentId)
    }

    /**
     * @param {number|null} folderId
     * @return {Asset[]}
     */
    findAssetsByFolderId(folderId) {
        return this.getAssets().filter(asset => asset.folderId === folderId)
    }

    /**
     * @param {number | null} folderId
     * @return {Folder[]}
     */
    findFolders(folderId) {
        return this.getFolders().filter(folder => folder.folderId === folderId)
    }

    /**
     * @param {string} name
     * @param {number | null} folderId
     * @return {Folder}
     */
    findFolderByName(name, folderId) {
        return this.findFolders(folderId).find(pFolder => pFolder.getName() === name)
    }

    /**
     * @return {Folder}
     */
    createRootFolder() {
        const rootFolderExist = this.findFolderByParentId(null)
        if (!rootFolderExist) {
            const rootFolder = new Folder('Root')
            this.addFolder(rootFolder)
            return rootFolder
        }
        return rootFolderExist
    }

    /**
     * @return {Folder}
     */
    getRootFolder() {
        return this.findFolderByParentId(null)
    }

    /**
     * @param {Folder} parentFolder
     */
    createFolder(parentFolder) {
        const actualParentFolder = parentFolder ? parentFolder : this.getRootFolder()
        const folderName = this.generateUniqFolderName('New Folder', actualParentFolder.getId())
        this.addFolder(new Folder(folderName, actualParentFolder))
    }

    /**
     * @param {string} name
     * @param {number} parentFolderId
     * @return {string}
     */
    generateUniqFolderName(name, parentFolderId) {
        let attempt = 0, newName, existFolder
        do {
            newName = attempt ? `${name} (${attempt})` : name
            existFolder = this.findFolderByName(newName, parentFolderId)
            attempt++
        } while (existFolder && attempt < NAME_ATTEMPT_MAX)
        return newName
    }

    /**
     * @param {string} name
     * @param {number} folderId
     * @return {string}
     */
    generateUniqAssetName(name, folderId) {
        let attempt = 0, newName, existAsset
        do {
            newName = attempt ? `${name} (${attempt})` : name
            existAsset = this.findAssetByName(newName, folderId)
            attempt++
        } while (existAsset && attempt < NAME_ATTEMPT_MAX)
        return newName
    }

    /**
     * @private
     * @param {Folder} folder
     */
    addFolder(folder) {
        const existFolder = this.findFolderByName(folder.getName(), folder.getFolderId())
        if (!existFolder) {
            this.folders.push(folder)
        } else {
            throw new TypeError(`Cannot add folder ${folder.getName()}: Already exist`)
        }
    }

}

const NAME_ATTEMPT_MAX = 200