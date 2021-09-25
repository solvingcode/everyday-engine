import ScriptXmlGenerator from '../ScriptXmlGenerator.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'

export default class NodeScriptXmlGenerator extends ScriptXmlGenerator {

    /**
     * @override
     */
    getXmlNode(node, parent) {
        const root = parent || document.implementation.createDocument('', '', null)
        const nodeNode = root.createElement('node')
        let nodeType = ScriptHelper.getNodeType(node)
        const {x: nodePositionX, y: nodePositionY} = node.getPosition()
        nodeNode.setAttribute('type', nodeType)
        nodeNode.setAttribute('id', `${node.getId()}`)
        nodeNode.setAttribute('position', `${nodePositionX},${nodePositionY}`)
        nodeNode.setAttribute('value', node.getSourceName())
        return nodeNode
    }

    /**
     * @return {NodeScriptXmlGenerator}
     */
    static get() {
        return super.get()
    }

}