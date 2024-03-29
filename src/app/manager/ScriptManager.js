import AScript from '../flow/AScript.js'
import ScriptManagerData from '../project/data/ScriptManagerData.js'
import SystemError from '../exception/type/SystemError.js'
import ClientError from '../exception/type/ClientError.js'

export default class ScriptManager extends ScriptManagerData {

    /**
     * @param {string} name
     * @return {AScript}
     */
    findByName(name) {
        return this.getScripts().find(script => script.getName() === name)
    }

    /**
     * @param {string} parentClassName
     * @return {AScript[]}
     */
    findByParentClassName(parentClassName) {
        return this.getScripts().filter(script => script.getParentName() === parentClassName)
    }

    /**
     * @param {Asset} asset
     * @return {AScript}
     */
    findByAsset(asset){
        return this.getScripts().find(script => script.getAssetId() === asset.getId())
    }

    /**
     * @param {string} name
     * @param {Function} type
     * @return {AScript}
     */
    create(name, type) {
        if (type.prototype instanceof AScript) {
            const script = new type(name)
            this.tryAdd(script)
            return script
        }
        throw new SystemError(`Script must be of type AScript!`)
    }

    /**
     * @param {AScript} script
     * @param {FunctionRegistry} functionRegistry
     */
    delete(script, functionRegistry) {
        const scriptIndex = this.scripts.findIndex(pScript => pScript === script)
        if (scriptIndex >= 0) {
            this.scripts.splice(scriptIndex, 1)
            script.delete(functionRegistry)
        } else {
            throw new ClientError(`Script cannot be deleted ("${script ? script.getName() : ''}" not found)`)
        }
    }

    /**
     * @param {AScript} script
     */
    tryAdd(script) {
        const existScript = this.findByName(script.getName())
        if (existScript) {
            throw new ClientError(`Script with name "${script.getName()}" already exist!`)
        }
        this.scripts.push(script)
    }

    /**
     * @param {AScript} script
     */
    add(script) {
        const indexScript = this.scripts.findIndex(pScript => pScript.getName() === script.getName())
        if (indexScript >= 0) {
            this.scripts[indexScript] = script
        } else {
            this.scripts.push(script)
        }
    }

    /**
     * @param {TabManager} tabManager
     * @return {AScript}
     */
    getSelected(tabManager) {
        const assetTab = this.getSelectedAsset(tabManager)
        return assetTab && this.findByName(assetTab.getName())
    }

    /**
     * @param {TabManager} tabManager
     * @return {AScriptFunction}
     */
    getFunctionSelected(tabManager) {
        const script = this.getSelected(tabManager)
        if (script) {
            return script.getSelected()
        }
    }

    /**
     * @param {TabManager} tabManager
     * @return {AScriptFunction}
     */
    getMainFunction(tabManager){
        const script = this.getSelected(tabManager)
        if (script) {
            return script.getMainFunction()
        }
    }

    /**
     * @param {TabManager} tabManager
     * @return {Asset}
     */
    getSelectedAsset(tabManager) {
        return tabManager.getSelectedContentData()
    }
}