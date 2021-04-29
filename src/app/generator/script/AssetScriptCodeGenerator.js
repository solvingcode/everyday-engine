import AssetScriptGenerator from './AssetScriptGenerator.js'

/**
 * @abstract
 */
export default class AssetScriptCodeGenerator extends AssetScriptGenerator{

    static instance

    /**
     * @override
     * @param {AScript} flow
     * @return {string}
     */
    generate(flow){
        return `class ${flow.getName().replace(' ', '')} {}`
    }

    /**
     * @return {AssetScriptCodeGenerator}
     */
    static get() {
        return super.get()
    }

}