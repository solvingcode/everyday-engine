import Parser from '../../Parser.js'
import EventNode from '../../../flow/node/EventNode.js'
import FunctionNode from '../../../flow/node/FunctionNode.js'
import ConstantNode from '../../../flow/node/ConstantNode.js'
import ClassFlow from '../../../flow/ClassFlow.js'

export default class ClassFlowXmlParser extends Parser {

    /**
     * @override
     * @param {XMLDocument} xmlDocument
     * @return {AFlow}
     */
    static parse(xmlDocument){
        const xmlNode = xmlDocument.documentElement
        const name = xmlNode.getAttribute('name')
        const flow = new ClassFlow(name)
        xmlNode.childNodes.forEach(cXmlNode => {
            const element = cXmlNode.nodeName
            if(element === 'node'){
                const nodeType = cXmlNode.getAttribute('type')
                const nodeValue = cXmlNode.getAttribute('value')
                const nodeId = cXmlNode.getAttribute('id')
                let node
                if(nodeType === 'event'){
                    node = new EventNode(nodeValue)
                }else if(nodeType === 'function'){
                    node = new FunctionNode(nodeValue)
                }else if(nodeType === 'constant'){
                    node = new ConstantNode(nodeValue)
                }else{
                    throw new TypeError(`ClassFlowXmlParser: Node with type "${nodeType}" not supported!`)
                }
                node.setId(nodeId)
                flow.addNode(node)
            }else if(element === 'edge'){
                const nodeSourceId = cXmlNode.getAttribute('source')
                const nodeTargetId = cXmlNode.getAttribute('target')
                const nodeConnection = cXmlNode.getAttribute('connection')
                const nodeSource = flow.findNodeById(nodeSourceId)
                const nodeTarget = flow.findNodeById(nodeTargetId)
                if(!nodeSource){
                    throw new TypeError(`ClassFlowXmlParser Error: Node ${nodeSourceId} not founded`)
                }
                if(!nodeTarget){
                    throw new TypeError(`ClassFlowXmlParser Error: Node ${nodeTargetId} not founded`)
                }
                const inputId = nodeConnection ? nodeTarget.getElement().getInputId(nodeConnection) : null
                nodeTarget.attach(nodeSource, inputId)
            }
        })
        return flow
    }

}