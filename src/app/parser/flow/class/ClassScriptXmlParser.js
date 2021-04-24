import Parser from '../../Parser.js'
import ClassScript from '../../../flow/ClassScript.js'
import World from '../../../world/World.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'

export default class ClassScriptXmlParser extends Parser {

    /**
     * @override
     * @param {Document} xmlDocument
     * @return {AScript}
     */
    static parse(xmlDocument){
        const xmlNode = xmlDocument.documentElement
        const name = xmlNode.getAttribute('name')
        const script = new ClassScript(name)
        const functionRegistry = World.get().getFunctionRegistry()
        xmlNode.childNodes.forEach(cXmlNode => {
            const element = cXmlNode.nodeName
            if(element === 'node'){
                const nodeType = cXmlNode.getAttribute('type')
                const nodeValue = cXmlNode.getAttribute('value')
                const nodeId = parseInt(cXmlNode.getAttribute('id'))
                const node = ScriptHelper.createNode(functionRegistry, script, nodeType, nodeValue)
                script.updateNodeId(node, nodeId)
            }else if(element === 'edge'){
                const nodeSourceId = parseInt(cXmlNode.getAttribute('source'))
                const nodeTargetId = parseInt(cXmlNode.getAttribute('target'))
                const nodeConnection = cXmlNode.getAttribute('connection')
                const nodeSource = script.findNodeById(nodeSourceId)
                const nodeTarget = script.findNodeById(nodeTargetId)
                if(!nodeSource){
                    throw new TypeError(`ClassScriptXmlParser Error: Node ${nodeSourceId} not founded`)
                }
                if(!nodeTarget){
                    throw new TypeError(`ClassScriptXmlParser Error: Node ${nodeTargetId} not founded`)
                }
                const inputId = nodeConnection
                    ? functionRegistry.getInstanceById(nodeTarget.getSourceId()).getInputId(nodeConnection)
                    : null
                nodeTarget.attach(nodeSource, inputId)
            }
        })
        return script
    }

}