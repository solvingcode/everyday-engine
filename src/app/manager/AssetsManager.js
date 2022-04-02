import AssetsManagerData from '../project/data/AssetsManagerData.js'
import Asset from '../asset/Asset.js'
import FileHelper from '../utils/FileHelper.js'
import AssetImage from '../asset/types/image/AssetImage.js'
import AssetScriptXml from '../asset/types/script/AssetScriptXml.js'
import Folder from '../asset/Folder.js'
import ClientError from '../exception/type/ClientError.js'
import AssetScript from '../asset/types/script/AssetScript.js'
import Animation from '../animation/Animation.js'
import AssetAnimationXml from '../asset/types/animation/AssetAnimationXml.js'
import SystemError from '../exception/type/SystemError.js'
import Maths from '../utils/Maths.js'
import AssetAudio from '../asset/types/Audio/AssetAudio.js'
import AssetFont from '../asset/types/font/AssetFont.js'
import AssetGradientColorXml from '../asset/types/color/AssetGradientColorXml.js'
import AssetHelper from '../utils/AssetHelper.js'
import AssetUnit from '../asset/types/unit/AssetUnit.js'
import * as StorageConstant from '../constant/StorageConstant.js'
import ScriptHelper from '../utils/ScriptHelper.js'
import {STATUS} from '../project/data/AScriptData.js'

/**
 * @class {AssetsManager}
 * @extends {AssetsManagerData}
 */
export default class AssetsManager extends AssetsManagerData {

    /**
     * @private
     * @param {string|null} data
     * @param {Class<AssetType>} type
     * @param {string} name
     * @param {Storage} storage
     * @param {*} object
     * @return {Promise<Asset>}
     */
    async setAsset(data, type, name, storage, object) {
        const folder = this.getSelectedFolder() || this.getRootFolder()
        const asset = new Asset(folder, {})
        asset.setType(new type())
        asset.setName(name)
        if (object) {
            object.setAssetId(asset.getId())
        }
        const assetData = data || await AssetHelper.generate(object, storage)
        if (await AssetHelper.load(asset, assetData, storage)) {
            this.assets.push(asset)
            return asset
        }
    }

    /**
     * @param {string|null} data
     * @param {Class<AssetType>} assetType
     * @param {string} assetName
     * @param {number} folderId
     * @param {Storage} storage
     * @param {*} object
     * @return {Promise<Asset>}
     */
    async createAsset(data, assetType, assetName, folderId, storage, object = null) {
        return this.setAsset(data, assetType, assetName, storage, object)
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
     * @param {ClassScript} scriptClass
     * @param {Storage} storage
     * @return {Asset}
     */
    async createClassScript(folder, type, scriptClass, storage) {
        const assetName = this.generateUniqAssetName('NewScript', folder.getId())
        const flow = new scriptClass(assetName)
        return this.createAsset(
            null,
            type,
            assetName,
            folder.getId(),
            storage,
            flow
        )
    }

    /**
     * @param {Folder} folder
     * @param {Class<AssetScript>} type
     * @param {ClassScript} scriptClass
     * @param {Storage} storage
     * @return {Asset}
     */
    async createAnimationScript(folder, type, scriptClass, storage) {
        const assetName = this.generateUniqAssetName('NewAnimationScript', folder.getId())
        const flow = new scriptClass(assetName)
        return this.createAsset(
            null,
            type,
            assetName,
            folder.getId(),
            storage,
            flow
        )
    }

    /**
     * @param {Folder} folder
     * @param {Class<AssetAnimationXml>} type
     * @param {AnimatorScript} animationController
     * @param {Storage} storage
     * @return {Asset}
     */
    async createAnimation(folder, type, animationController, storage) {
        const assetName = this.generateUniqAssetName('Animation', folder.getId())
        const animation = new Animation(Maths.generateId(), assetName)
        animationController.addAnimation(animation)
        return this.createAsset(
            null,
            type,
            assetName,
            folder.getId(),
            storage,
            animation
        )
    }

    /**
     * @param {Folder} folder
     * @param {Unit} unit
     * @param {string} dataXml
     * @param {Storage} storage
     * @return {Promise<Asset>}
     */
    async createUnitInstant(folder, unit, dataXml, storage) {
        const assetName = this.generateUniqAssetName(unit.getName(), folder.getId())
        return await this.createAsset(
            dataXml,
            AssetUnit,
            assetName,
            folder.getId(),
            storage
        )
    }

    /**
     * @param {File} blob
     * @param {Storage} storage
     */
    setAssetByBlob(blob, storage) {
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
            const type = this.getAssetType(blob, data)
            return this.setAsset(data, type, FileHelper.getFilename(blob.name), storage, null)
        })
    }

    /**
     * @param {Blob} blob
     * @return {boolean}
     */
    isBlobImage(blob) {
        return blob.type === FileHelper.type.IMG_JPEG || blob.type === FileHelper.type.IMG_PNG
    }

    /**
     * @param {Blob} blob
     * @return {boolean}
     */
    isBlobAudio(blob) {
        return blob.type === FileHelper.type.WAV || blob.type === FileHelper.type.MPEG
    }

    /**
     * @param {Blob} blob
     * @return {boolean}
     */
    isBlobFont(blob) {
        return blob.type === FileHelper.type.FONT_TTF || blob.type === FileHelper.type.FONT_OTF
    }

    /**
     * @param {Blob} blob
     * @return {boolean}
     */
    isBlobXml(blob) {
        return blob.type === FileHelper.type.XML
    }

    /**
     * @return {Asset[]}
     */
    getParsedAssets() {
        return this.getAssets().filter(asset => AssetHelper.isParsedAsset(asset))
    }

    /**
     * @return {Asset[]}
     */
    getUnitAssets() {
        return this.getAssets().filter(asset => AssetHelper.isAssetUnit(asset))
    }

    /**
     * @return {Asset[]}
     */
    getAudioAssets() {
        return this.getAssets().filter(asset => AssetHelper.isAssetAudio(asset))
    }

    /**
     * @return {Asset[]}
     */
    getImageAssets() {
        return this.getAssets().filter(asset => AssetHelper.isAssetImage(asset))
    }

    /**
     * @return {Asset[]}
     */
    getColorAssets() {
        return this.getAssets().filter(asset => AssetHelper.isAssetColor(asset))
    }

    /**
     * @return {Asset[]}
     */
    getFontAssets() {
        return this.getAssets().filter(asset => AssetHelper.isAssetFont(asset))
    }

    /**
     * @return {Asset[]}
     */
    getScriptAssets() {
        return this.getAssets().filter(asset => AssetHelper.isAssetScript(asset))
    }

    /**
     * @param {Blob} blob
     * @param {string} data
     * @return {Class<AssetType>}
     */
    getAssetType(blob, data) {
        if (this.isBlobImage(blob)) {
            return AssetImage
        } else if (this.isBlobXml(blob)) {
            return this.getAssetXmlType(data)
        } else if (this.isBlobAudio(blob)) {
            return AssetAudio
        } else if (this.isBlobFont(blob)) {
            return AssetFont
        } else {
            throw new ClientError(`Asset type "${blob.type}" not supported`)
        }
    }

    /**
     * @param {string} data
     * @return {Class<AssetType>}
     */
    getAssetXmlType(data) {
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'application/xml')
        const tagName = doc.documentElement.tagName
        switch (tagName) {
            case 'flow':
                return AssetScriptXml
            case 'color':
                return AssetGradientColorXml
            case 'animation':
                return AssetAnimationXml
            case StorageConstant.type.UNITS:
                return AssetUnit
            case 'html':
                throw new ClientError(`Asset XML : ${doc.documentElement.textContent}`)
            default:
                throw new ClientError(`Asset XML Type "${tagName}" not supported`)
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
        if (!asset || !AssetHelper.isAssetImage(asset)) {
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
        if (!asset || !AssetHelper.isAssetAudio(asset)) {
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
        if (!asset || !AssetHelper.isAssetFont(asset)) {
            throw new SystemError(`No asset font found with ID "${assetId}"`)
        }
        return asset
    }

    /**
     * @param {number|string} assetId
     * @return {Asset}
     */
    findAssetUnitById(assetId) {
        const asset = this.findAssetById(assetId)
        if (!asset || !AssetHelper.isAssetUnit(asset)) {
            throw new SystemError(`No asset unit found with ID "${assetId}"`)
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
     * @param {AScript} script
     */
    findAssetByScript(script) {
        return this.findAssetById(script.getAssetId())
    }

    /**
     * @param {Asset} asset
     * @return {boolean}
     */
    hasAsset(asset) {
        return !!this.assets.find(pAsset => pAsset === asset)
    }

    /**
     * @param {AssetType} assetType
     * @return {Asset}
     */
    findAssetType(assetType) {
        return this.getAssets().find(pAsset => pAsset.getType() === assetType)
    }

    /**
     * @param {AScript} script
     * @param {World} world
     */
    compileScript(script, world) {
        if (script.getStatus() !== STATUS.COMPILED) {
            const parentAsset = this.findAssetById(script.getAssetId())
            if (parentAsset) {
                this.compileScriptAssets([parentAsset], world)
            } else {
                throw new ClientError(`Compile script asset: Asset for "${script.getName()}" not found`)
            }
        }
    }

    /**
     * @param {Asset[]} assets
     * @param {World} world
     */
    compileScriptAssets(assets, world) {
        assets.forEach(asset => {
            if (asset.getType() instanceof AssetScript) {
                const script = world.getScriptManager().findByAsset(asset)
                if (script) {
                    const parentClassName = script.getParentName()
                    if (parentClassName) {
                        const parentScript = world.getScriptManager().findByName(parentClassName)
                        if (parentScript) {
                            this.compileScript(parentScript, world)
                        } else {
                            throw new ClientError(`Compile script asset: Parent Class "${parentClassName}" is not present`)
                        }
                    }
                    const scriptUsages = ScriptHelper.getAllUsage(script, world)
                    scriptUsages.forEach(scriptUsage => {
                        if (scriptUsage !== script) {
                            this.compileScript(scriptUsage, world)
                        }
                    })
                    this.compileScriptAsset(asset, script, world)
                } else {
                    throw new ClientError(`Compile script asset: Asset "${asset.getName()}" is not parsed`)
                }
            }
        })
    }

    /**
     * @param {Asset} asset
     * @param {AScript} script
     * @param {World} world
     */
    compileScriptAsset(asset, script, world) {
        const unitManager = world.getUnitManager()
        script.compile(world)
        const unitsAttached = unitManager.findUnitsAttachedToScript(script)
        unitsAttached.forEach(unit => {

            const oldScriptComponent = unitManager.findComponentAttachedToScript(unit, script)
            const oldAttributes = oldScriptComponent.getAttributes()
            unit.deleteComponent(oldScriptComponent.getId())

            AssetHelper.attachAssetScriptToUnit(unit, asset, world)
            const newScriptComponent = unitManager.findComponentAttachedToScript(unit, script)
            newScriptComponent.getAttributes().forEach(attribute => {
                const oldAttribute = oldAttributes
                    .find(pOldAttribute =>
                        pOldAttribute.getAttrName() === attribute.getAttrName() &&
                        pOldAttribute.getAttrType() === attribute.getAttrType()
                    )
                if (oldAttribute) {
                    attribute.setAttrValue(oldAttribute.getAttrValue())
                }
            })

        })
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

    /**
     * @param {World} world
     */
    compileAllScript(world) {
        this.getScriptAssets().forEach(asset => this.compileScriptAssets([asset], world))
    }

}

const NAME_ATTEMPT_MAX = 200