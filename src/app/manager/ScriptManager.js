import AScript from '../flow/AScript.js'
import ScriptParser from '../parser/flow/ScriptParser.js'
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
            throw new ClientError(`Script cannot be deleted ("${script.getName()}" not found)`)
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
     * @param {Document|string} data
     * @return {AScript}
     */
    load(data) {
        const script = ScriptParser.parse(data)
        if (script) {
            this.add(script)
            return script
        }
        return null
    }

    /**
     * @param {Document} data
     * @param {string} oldName
     * @param {string} newName
     */
    rename(data, oldName, newName) {
        ScriptParser.rename(data, newName)
        const script = this.findByName(oldName)
        script.setName(newName)
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