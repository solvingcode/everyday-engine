import ScriptXmlGenerator from './ScriptXmlGenerator.js'

/**
 * @abstract
 */
export default class AssetScriptCodeGenerator extends ScriptXmlGenerator{

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