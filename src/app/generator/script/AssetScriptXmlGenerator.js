import NodeHelper from '../../utils/NodeHelper.js'
import ScriptHelper from '../../utils/ScriptHelper.js'
import AssetScriptGenerator from './AssetScriptGenerator.js'

/**
 * @abstract
 */
export default class AssetScriptXmlGenerator extends AssetScriptGenerator {

    static instance

    /**
     * @override
     * @param {AScript} flow
     * @return {string}
     */
    generate(flow) {
        const {x, y, z} = flow.getCamera().getPosition()
        const xmlSerializer = new XMLSerializer()
        const root = document.implementation.createDocument('', '', null)
        const parentNode = root.createElement('flow')
        parentNode.setAttribute('type', 'class')
        parentNode.setAttribute('name', flow.getName())
        parentNode.setAttribute('view', `${x},${y},${z}`)
        flow.getNodes().forEach(node => {
            const nodeNode = root.createElement('node')
            const sourceNode = NodeHelper.getSourceNode(node)
            let nodeType = ScriptHelper.getNodeType(node)
            const {x: nodePositionX, y: nodePositionY} = node.getPosition()
            nodeNode.setAttribute('type', nodeType)
            nodeNode.setAttribute('id', `${node.getId()}`)
            nodeNode.setAttribute('position', `${nodePositionX},${nodePositionY}`)
            nodeNode.setAttribute('value', sourceNode.getName())
            parentNode.appendChild(nodeNode)
        })
        flow.getNodes().forEach(node => {
            node.getInputs().forEach(input => {
                if (flow.findNodeById(input.getSourceNodeId())) {
                    const edgeNode = root.createElement('edge')
                    const sourceInput = NodeHelper.getSourceNode(node).findInputById(input.getTargetId())
                    edgeNode.setAttribute('source', `${input.getSourceNodeId()}`)
                    edgeNode.setAttribute('target', `${node.getId()}`)
                    edgeNode.setAttribute('connection', sourceInput ? sourceInput.getAttrName() : '')
                    parentNode.appendChild(edgeNode)
                }
            })
        })
        root.appendChild(parentNode)
        return xmlSerializer.serializeToString(root)
    }

    /**
     * @return {AssetScriptXmlGenerator|*}
     */
    static get() {
        return super.get()
    }

}