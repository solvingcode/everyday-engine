import Parser from '../../Parser.js'
import World from '../../../world/World.js'
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
        const flow = World.get().getFlowManager().create(name, ClassFlow)
        xmlNode.childNodes.forEach(cXmlNode => {
            const element = cXmlNode.nodeName
            if(element === 'node'){
                const nodeType = cXmlNode.getAttribute('type')
                const nodeValue = cXmlNode.getAttribute('value')
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
                flow.addNode(node)
            }
        })
        return flow
    }

}