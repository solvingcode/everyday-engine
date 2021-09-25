import Parser from '../../Parser.js'
import ClassScript from '../../../flow/ClassScript.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import Vector from '../../../utils/Vector.js'
import SystemError from '../../../exception/type/SystemError.js'
import FunctionScript from '../../../flow/FunctionScript.js'

export default class ClassScriptXmlParser extends Parser {

    /**
     * @override
     * @param {Document} xmlDocument
     * @return {AScript}
     */
    static parse(xmlDocument) {
        const xmlNode = xmlDocument.documentElement
        const name = xmlNode.getAttribute('name')
        const script = new ClassScript(name)
        xmlNode.childNodes.forEach(functionXmlNode => {
            const functionTag = functionXmlNode.nodeName
            if (functionTag === 'function') {
                const functionName = functionXmlNode.getAttribute('name')
                const view = functionXmlNode.getAttribute('view')
                const functionScript = new FunctionScript(functionName)
                if (view) {
                    const positionSplit = view.split(',')
                    if (positionSplit.length === 3) {
                        const position = new Vector({
                            x: parseFloat(positionSplit[0]),
                            y: parseFloat(positionSplit[1]),
                            z: parseFloat(positionSplit[2])
                        })
                        functionScript.getCamera().setPosition(position)
                    }
                }
                functionXmlNode.childNodes.forEach(cXmlNode => {
                    ScriptHelper.addXmlNode(cXmlNode, functionScript)
                })
                script.addFunction(functionScript)
            }else{
                throw new SystemError(`Script must have a function child (${functionTag} provided)`)
            }
        })
        return script
    }

}