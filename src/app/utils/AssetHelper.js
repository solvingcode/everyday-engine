import AssetScript from '../asset/types/script/AssetScript.js'
import SystemError from '../exception/type/SystemError.js'
import VariableNode from '../flow/node/variable/VariableNode.js'
import NodeHelper from './NodeHelper.js'
import DynamicAttribute from '../pobject/DynamicAttribute.js'
import AssetAnimationScriptXml from '../asset/types/animation/AssetAnimationScriptXml.js'
import AnimationComponent from '../component/internal/AnimationComponent.js'
import ClientError from '../exception/type/ClientError.js'
import AssetScriptXml from '../asset/types/script/AssetScriptXml.js'
import ScriptComponent from '../component/internal/ScriptComponent.js'
import AssetImage from '../asset/types/image/AssetImage.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import Animation from '../animation/Animation.js'
import * as StorageConstant from '../constant/StorageConstant.js'
import StorageHelper from './StorageHelper.js'
import AssetAnimationXml from '../asset/types/animation/AssetAnimationXml.js'
import AnimationScript from '../flow/AnimationScript.js'
import ScriptHelper from './ScriptHelper.js'
import ClassScript from '../flow/ClassScript.js'
import AScript from '../flow/AScript.js'
import AssetUnit from '../asset/types/unit/AssetUnit.js'
import AssetAudio from '../asset/types/Audio/AssetAudio.js'
import AssetGradientColorXml from '../asset/types/color/AssetGradientColorXml.js'
import AssetFont from '../asset/types/font/AssetFont.js'

export default class AssetHelper {

    /**
     * @param {Asset} asset
     * @param {World} world
     */
    static deleteAsset(asset, world) {
        const scriptManager = world.getScriptManager()
        const assetManager = world.getAssetsManager()
        assetManager.deleteAsset(asset)
        if (asset.getType() instanceof AssetScript) {
            const script = scriptManager.findByName(asset.getName())
            scriptManager.delete(script, world.getFunctionRegistry())
        }
        if (asset.getType() instanceof AssetAnimationScriptXml) {
            world.getUnitManager().findUnitsByComponents([AnimationComponent])
                .forEach(unit => {
                    const animationComponent = unit.getComponent(AnimationComponent)
                    if (animationComponent.getScript() === asset.getName()) {
                        unit.deleteComponent(animationComponent.getId())
                    }
                })
        } else if (asset.getType() instanceof AssetScriptXml) {
            world.getUnitManager().findUnitsByComponentClasses([ScriptComponent])
                .forEach(unit => {
                    const scriptComponents = unit.findComponentsByClass(ScriptComponent)
                    scriptComponents.forEach(scriptComponent => {
                        if (scriptComponent.getScript() === asset.getName()) {
                            unit.deleteComponent(scriptComponent.getId())
                        }
                    })
                })
        } else if (asset.getType() instanceof AssetImage) {
            world.getUnitManager().emptyUnitsByAsset(asset)
            world.getAnimationManager().deleteFrameByAsset(asset)
            world.regenerateAll()
        }
    }

    /**
     * @param {number} assetId
     * @param {World} world
     * @return {DynamicAttribute[]}
     */
    static getAssetScriptVars(assetId, world) {
        const assetManager = world.getAssetsManager()
        const asset = assetManager.findAssetById(assetId)
        if (!asset) {
            throw new SystemError(`Asset not found "${assetId}"`)
        }
        const script = this.getScript(asset, world)
        if (!script) {
            throw new ClientError(`No compiled script found for asset "${asset.getName()}"`)
        }
        return this.getScriptVars(script, world)
    }

    /**
     * @param {AScript} script
     * @param {World} world
     * @return {DynamicAttribute[]}
     */
    static getScriptVars(script, world) {
        const functionScript = script.getMainFunction()
        if (functionScript) {
            const nodes = functionScript.findNodesByClass(VariableNode)
            return [...nodes.map(node => {
                const sourceNode = NodeHelper.getSourceNode(node, world)
                return new DynamicAttribute(sourceNode.getName(), sourceNode.getOutput().getAttrType())
            }), ...(script.getParentName() ?
                this.getScriptVars(world.getScriptManager().findByName(script.getParentName()), world) : [])]
        }
        return []
    }

    /**
     * @param {Asset} asset
     * @param {World} world
     * @return {AScript}
     */
    static getScript(asset, world) {
        if (asset.getType() instanceof AssetScript) {
            const scriptManager = world.getScriptManager()
            return scriptManager.findByName(asset.getName())
        }
        throw new SystemError(`Asset "${asset.getName()}" is not a script`)
    }

    /**
     * @param {Unit} unit
     * @param {Asset} asset
     * @param {World} world
     */
    static attachAssetScriptToUnit(unit, asset, world) {
        if (asset.getType() instanceof AssetScriptXml) {
            const scriptComponent = unit.createComponent(ScriptComponent)
            scriptComponent.setName(`${asset.getName()}`)
            scriptComponent.setScript(asset.getName())
            scriptComponent.setVarsAttributes(AssetHelper.getAssetScriptVars(asset.getId(), world))
        } else if (asset.getType() instanceof AssetAnimationScriptXml) {
            const animationComponent = unit.createComponent(AnimationComponent)
            animationComponent.setName(`${asset.getName()}`)
            animationComponent.setVarsAttributes(AssetHelper.getAssetScriptVars(asset.getId(), world))
            animationComponent.setScript(asset.getName())
        } else {
            throw new ClientError(`Cannot attach asset "${asset.getType().constructor.name}" : Type not supported`)
        }
    }

    /**
     * @param {Unit} unit
     * @param {Asset} asset
     */
    static attachAssetImageToUnit(unit, asset) {
        const meshComponent = unit.getComponent(MeshComponent)
        meshComponent.setAssetId(asset.getId())
        meshComponent.setGenerated(false)
    }

    /**
     * @param {*} object
     * @param {Storage} storage
     */
    static async generate(object, storage) {
        const storageType = this.getStorageTypeFromObject(object)
        return storage.serialize(storageType, object, StorageConstant.format.XML)
    }

    /**
     * @param {Asset} asset
     * @param {*} object
     * @param {Storage} storage
     */
    static async regenerate(asset, object, storage) {
        const serialized = await this.generate(object, storage)
        await asset.getType().setDataUrl(serialized)
    }

    /**
     * @param {*} object
     * @return {string}
     */
    static getStorageTypeFromObject(object) {
        let storageType
        switch (object.constructor) {
            case Animation:
                storageType = StorageConstant.type.ANIMATION
                break
            case AnimationScript:
                storageType = StorageConstant.type.SCRIPT
                break
            case ClassScript:
                storageType = StorageConstant.type.SCRIPT
                break
            default:
                throw new SystemError(`Cannot find storage type : ${object.constructor.name} not supported`)
        }
        return storageType
    }

    /**
     * @param {Asset} asset
     * @return {string}
     */
    static getStorageTypeFromAsset(asset) {
        let storageType
        const type = asset.getType()
        switch (asset.getType().constructor) {
            case AssetAnimationXml:
                storageType = StorageConstant.type.ANIMATION
                break
            case AssetScriptXml:
                storageType = StorageConstant.type.SCRIPT
                break
            case AssetAnimationScriptXml:
                storageType = StorageConstant.type.SCRIPT
                break
            default:
                throw new SystemError(`Cannot find storage type : ${type.constructor.name} not supported`)
        }
        return storageType
    }

    /**
     * @param {Document} xmlDocument
     * @param {Storage} storage
     * @param {string} type
     * @return {Promise<*>}
     */
    static async parseXml(xmlDocument, storage, type) {
        const stringData = (new XMLSerializer()).serializeToString(xmlDocument)
        return this.parseString(stringData, storage, type)
    }

    /**
     * @param {string} stringData
     * @param {Storage} storage
     * @param {string} type
     * @return {Promise<*>}
     */
    static async parseString(stringData, storage, type) {
        return StorageHelper.parseXml(type, stringData, storage)
    }

    /**
     * @param {*} object
     * @param {World} world
     */
    static validate(object, world) {
        if (object instanceof Animation) {
            return true
        } else if (object instanceof AScript) {
            return object.getFunctions().every(func => ScriptHelper.validate(func, world))
        }
        throw new SystemError(`Cannot validate object: ${object.constructor.name} not supported`)
    }

    /**
     * @param {Asset} asset
     * @param {Storage} storage
     * @return {Promise<*>}
     */
    static async parseAsset(asset, storage) {
        const type = this.getStorageTypeFromAsset(asset)
        return this.parseString(asset.getType().getDataUrl(), storage, type)
    }

    /**
     * @param {Asset} asset
     * @param {string} data
     * @param {Storage} storage
     * @return {Promise<*>}
     */
    static load(asset, data, storage) {
        if (this.isAssetImage(asset)) {
            return asset.getType().getData().fromImage(data);
        } else if (this.isParsedAsset(asset)) {
            const type = this.getStorageTypeFromAsset(asset)
            return asset.getType().setDataUrl(data)
                .then(() => {
                    return this.parseString(data, storage, type)
                })
                .then(parsedData => {
                    asset.setName(parsedData.getName())
                    return new Promise(resolve => {
                        resolve(parsedData)
                    })
                })
        } else {
            throw new SystemError(`Cannot load asset: "${asset.getType().constructor.name} not supported`)
        }
    }

    /**
     * @param {Asset} asset
     * @return {boolean}
     */
    static isAssetUnit(asset) {
        return asset && asset.getType() instanceof AssetUnit
    }

    /**
     * @param {Asset} asset
     * @return {boolean}
     */
    static isParsedAsset(asset) {
        return this.isAssetScript(asset) || this.isAssetAnimation(asset)
    }

    /**
     * @param {Asset} asset
     * @return {boolean}
     */
    static isAssetScript(asset) {
        return asset && asset.getType() instanceof AssetScript
    }

    /**
     * @param {Asset} asset
     * @return {boolean}
     */
    static isAssetAnimation(asset) {
        return asset && asset.getType() instanceof AssetAnimationXml
    }

    /**
     * @param {Asset} asset
     * @return {boolean}
     */
    static isAssetImage(asset) {
        return asset && asset.getType() instanceof AssetImage
    }

    /**
     * @param {Asset} asset
     * @return {boolean}
     */
    static isAssetAudio(asset) {
        return asset && asset.getType() instanceof AssetAudio
    }

    /**
     * @param {Asset} asset
     * @return {boolean}
     */
    static isAssetColor(asset) {
        return asset && asset.getType() instanceof AssetGradientColorXml
    }

    /**
     * @param {Asset} asset
     * @return {boolean}
     */
    static isAssetFont(asset) {
        return asset && asset.getType() instanceof AssetFont
    }

}