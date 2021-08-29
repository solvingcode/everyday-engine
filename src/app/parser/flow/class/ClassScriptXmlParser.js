import Parser from '../../Parser.js'
import ClassScript from '../../../flow/ClassScript.js'
import World from '../../../world/World.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import ClientError from '../../../exception/type/ClientError.js'
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
        const functionRegistry = World.get().getFunctionRegistry()
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
                    const element = cXmlNode.nodeName
                    if (element === 'node') {
                        const nodeType = cXmlNode.getAttribute('type')
                        const nodeValue = cXmlNode.getAttribute('value')
                        const nodeId = parseInt(cXmlNode.getAttribute('id'))
                        const positionSplit = cXmlNode.getAttribute('position').split(',')
                        const position = new Vector({x: parseFloat(positionSplit[0]), y: parseFloat(positionSplit[1])})
                        const node = ScriptHelper.createNode(functionRegistry, functionScript, nodeType, nodeValue)
                        node.setPosition(position)
                        functionScript.updateNodeId(node, nodeId)
                    } else if (element === 'edge') {
                        const nodeSourceId = parseInt(cXmlNode.getAttribute('source'))
                        const nodeTargetId = parseInt(cXmlNode.getAttribute('target'))
                        const nodeConnection = cXmlNode.getAttribute('connection')
                        const nodeSource = functionScript.findNodeById(nodeSourceId)
                        const nodeTarget = functionScript.findNodeById(nodeTargetId)
                        if (!nodeSource) {
                            throw new ClientError(`ClassScriptXmlParser Error: Node ${nodeSourceId} not founded`)
                        }
                        if (!nodeTarget) {
                            throw new ClientError(`ClassScriptXmlParser Error: Node ${nodeTargetId} not founded`)
                        }
                        nodeTarget.attach(nodeSource, nodeConnection)
                    }
                })
                script.addFunction(functionScript)
            }else{
                throw new SystemError(`Script must have a function child (${functionTag} provided)`)
            }
        })
        return script
    }

}