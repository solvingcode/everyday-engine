import Parser from '../../../Parser.js'
import World from '../../../../world/World.js'
import ScriptHelper from '../../../../utils/ScriptHelper.js'
import Vector from '../../../../utils/Vector.js'

export default class NodeScriptXmlParser extends Parser {

    /**
     * @override
     * @param {Document|Element|ChildNode} xmlNode
     * @return {ANode}
     */
    static parse(xmlNode) {
        const functionRegistry = World.get().getFunctionRegistry()
        const nodeType = xmlNode.getAttribute('type')
        const nodeValue = xmlNode.getAttribute('value')
        const positionSplit = xmlNode.getAttribute('position').split(',')
        const position = new Vector({x: parseFloat(positionSplit[0]), y: parseFloat(positionSplit[1])})
        const node = ScriptHelper.newNode(functionRegistry, nodeType, nodeValue)
        node.setPosition(position)
        return node
    }

}