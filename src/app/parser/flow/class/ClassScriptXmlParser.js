import Parser from '../../Parser.js'
import EventNode from '../../../flow/node/EventNode.js'
import FunctionNode from '../../../flow/node/FunctionNode.js'
import ConstantNode from '../../../flow/node/ConstantNode.js'
import ClassScript from '../../../flow/ClassScript.js'
import World from '../../../world/World.js'

export default class ClassScriptXmlParser extends Parser {

    /**
     * @override
     * @param {XMLDocument} xmlDocument
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
                const nodeId = cXmlNode.getAttribute('id')
                let node
                if(nodeType === 'event'){
                    node = script.createNode(functionRegistry, EventNode, nodeValue)
                }else if(nodeType === 'function'){
                    node = script.createNode(functionRegistry, FunctionNode, nodeValue)
                }else if(nodeType === 'constant'){
                    node = script.createNode(functionRegistry, ConstantNode, nodeValue)
                }else{
                    throw new TypeError(`ClassScriptXmlParser: Node with type "${nodeType}" not supported!`)
                }
                node.setId(nodeId)
            }else if(element === 'edge'){
                const nodeSourceId = cXmlNode.getAttribute('source')
                const nodeTargetId = cXmlNode.getAttribute('target')
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