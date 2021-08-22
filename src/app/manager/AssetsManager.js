import AssetsManagerData from '../project/data/AssetsManagerData.js'
import Asset from '../asset/Asset.js'
import FileHelper from '../utils/FileHelper.js'
import AssetImage from '../asset/types/image/AssetImage.js'
import AssetScriptXml from '../asset/types/script/AssetScriptXml.js'
import Folder from '../asset/Folder.js'
import ClassScript from '../flow/ClassScript.js'
import ClientError from '../exception/type/ClientError.js'
import AssetScript from '../asset/types/script/AssetScript.js'
import Animation from '../animation/Animation.js'
import AssetAnimationXml from '../asset/types/animation/AssetAnimationXml.js'
import SystemError from '../exception/type/SystemError.js'
import AnimationScript from '../flow/AnimationScript.js'
import Maths from '../utils/Maths.js'
import AssetAudio from '../asset/types/Audio/AssetAudio.js'
import AssetFont from '../asset/types/font/AssetFont.js'

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
     * @param {Asset} asset
     */
    deleteAsset(asset) {
        const indexAsset = this.assets.findIndex(pAsset => pAsset === asset)
        if (indexAsset >= 0) {
            this.assets.splice(indexAsset, 1)
        } else {
            throw new TypeError(`Asset cannot be deleted ("${asset.getName()}" not found)`)
        }
    }

    /**
     * @param {Folder} folder
     */
    deleteFolder(folder) {
        const indexFolder = this.folders.findIndex(pFolder => pFolder === folder)
        if (indexFolder >= 0) {
            this.folders.splice(indexFolder, 1)
        } else {
            throw new TypeError(`Folder cannot be deleted ("${folder.getName()}" not found)`)
        }
    }

    /**
     * @param {Folder} folder
     * @param {Class<AssetScript>} type
     * @param {AssetScriptGenerator} generator
     */
    async createClassScript(folder, type, generator) {
        const assetName = this.generateUniqAssetName('NewScript', folder.getId())
        const flow = new ClassScript(assetName)
        return this.createAsset(
            generator.generate(flow),
            type,
            assetName,
            folder.getId()
        )
    }

    /**
     * @param {Folder} folder
     * @param {Class<AssetScript>} type
     * @param {AssetAnimationScriptGenerator} generator
     */
    async createAnimationScript(folder, type, generator) {
        const assetName = this.generateUniqAssetName('NewAnimationScript', folder.getId())
        const flow = new AnimationScript(assetName)
        return this.createAsset(
            generator.generate(flow),
            type,
            assetName,
            folder.getId()
        )
    }

    /**
     * @param {Folder} folder
     * @param {Class<AssetAnimationXml>} type
     * @param {AssetAnimationXmlGenerator} generator
     */
    async createAnimation(folder, type, generator) {
        const assetName = this.generateUniqAssetName('Animation', folder.getId())
        const animation = new Animation(Maths.generateId(), assetName)
        return this.createAsset(
            generator.generate(animation),
            type,
            assetName,
            folder.getId()
        )
    }

    /**
     * @param {File} blob
     */
    setAssetByBlob(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => {
                resolve(reader.result)
            }
            reader.onerror = reject
            if (this.isBlobImage(blob) || this.isBlobAudio(blob) || this.isBlobFont(blob)) {
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
     * @return {boolean}
     */
    isBlobImage(blob) {
        const type = this.getAssetType(blob)
        return type === AssetImage
    }

    /**
     * @param {Blob} blob
     * @return {boolean}
     */
    isBlobAudio(blob) {
        const type = this.getAssetType(blob)
        return type === AssetAudio
    }

    /**
     * @param {Blob} blob
     * @return {boolean}
     */
    isBlobFont(blob) {
        const type = this.getAssetType(blob)
        return type === AssetFont
    }

    /**
     * @return {Asset[]}
     */
    getParsedAssets() {
        return this.getAssets().filter(asset => this.isAssetScript(asset) || this.isAssetAnimation(asset))
    }

    /**
     * @return {Asset[]}
     */
    getAudioAssets(){
        return this.getAssets().filter(asset => this.isAssetAudio(asset))
    }

    /**
     * @return {Asset[]}
     */
    getFontAssets(){
        return this.getAssets().filter(asset => this.isAssetFont(asset))
    }

    /**
     * @param {Asset} asset
     * @return {boolean}
     */
    isAssetScript(asset) {
        return asset && asset.getType() instanceof AssetScript
    }

    /**
     * @param {Asset} asset
     * @return {boolean}
     */
    isAssetAnimation(asset) {
        return asset && asset.getType() instanceof AssetAnimationXml
    }

    /**
     * @param {Asset} asset
     * @return {boolean}
     */
    isAssetImage(asset) {
        return asset && asset.getType() instanceof AssetImage
    }

    /**
     * @param {Asset} asset
     * @return {boolean}
     */
    isAssetAudio(asset) {
        return asset && asset.getType() instanceof AssetAudio
    }

    /**
     * @param {Asset} asset
     * @return {boolean}
     */
    isAssetFont(asset) {
        return asset && asset.getType() instanceof AssetFont
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
            case FileHelper.type.WAV:
                return AssetAudio
            case FileHelper.type.TTF:
                return AssetFont
            case FileHelper.type.MPEG:
                return AssetAudio
            default:
                throw new ClientError(`Asset type "${type}" not supported`)
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
     * @param {number|string} assetId
     * @return {Asset}
     */
    findAssetImageById(assetId) {
        const asset = this.findAssetById(assetId)
        if (!asset || !this.isAssetImage(asset)) {
            throw new SystemError(`No asset image found with ID "${assetId}"`)
        }
        return asset
    }

    /**
     * @param {number|string} assetId
     * @return {Asset}
     */
    findAssetAudioById(assetId) {
        const asset = this.findAssetById(assetId)
        if (!asset || !this.isAssetAudio(asset)) {
            throw new SystemError(`No asset audio found with ID "${assetId}"`)
        }
        return asset
    }

    /**
     * @param {number|string} assetId
     * @return {Asset}
     */
    findAssetFontById(assetId) {
        const asset = this.findAssetById(assetId)
        if (!asset || !this.isAssetFont(asset)) {
            throw new SystemError(`No asset font found with ID "${assetId}"`)
        }
        return asset
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
            newName = attempt ? `${name}${attempt}` : name
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