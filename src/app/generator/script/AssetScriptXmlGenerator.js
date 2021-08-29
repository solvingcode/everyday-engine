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
        const xmlSerializer = new XMLSerializer()
        const root = document.implementation.createDocument('', '', null)
        const parentNode = root.createElement('flow')
        parentNode.setAttribute('type', 'class')
        parentNode.setAttribute('name', flow.getName())
        flow.getFunctions().forEach(scriptFunction => {
            const functionNode = root.createElement('function')
            functionNode.setAttribute('name', scriptFunction.getName())
            const {x, y, z} = scriptFunction.getCamera().getPosition()
            functionNode.setAttribute('view', `${x},${y},${z}`)
            scriptFunction.getNodes().forEach(node => {
                const nodeNode = root.createElement('node')
                let nodeType = ScriptHelper.getNodeType(node)
                const {x: nodePositionX, y: nodePositionY} = node.getPosition()
                nodeNode.setAttribute('type', nodeType)
                nodeNode.setAttribute('id', `${node.getId()}`)
                nodeNode.setAttribute('position', `${nodePositionX},${nodePositionY}`)
                nodeNode.setAttribute('value', node.getSourceName())
                functionNode.appendChild(nodeNode)
            })
            scriptFunction.getNodes().forEach(node => {
                node.getInputs().forEach(input => {
                    if (scriptFunction.findNodeById(input.getSourceNodeId())) {
                        const edgeNode = root.createElement('edge')
                        edgeNode.setAttribute('source', `${input.getSourceNodeId()}`)
                        edgeNode.setAttribute('target', `${node.getId()}`)
                        edgeNode.setAttribute('connection', input.getTargetName() || '')
                        functionNode.appendChild(edgeNode)
                    }
                })
            })
            parentNode.appendChild(functionNode)
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