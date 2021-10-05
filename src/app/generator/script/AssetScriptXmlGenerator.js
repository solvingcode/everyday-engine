import ScriptXmlGenerator from './ScriptXmlGenerator.js'
import NodeScriptXmlGenerator from './node/NodeScriptXmlGenerator.js'
import EdgeScriptXmlGenerator from './node/EdgeScriptXmlGenerator.js'

/**
 * @abstract
 */
export default class AssetScriptXmlGenerator extends ScriptXmlGenerator {

    static instance

    /**
     * @override
     */
    getXmlNode(flow, parent) {
        const root = document.implementation.createDocument('', '', null)
        const parentNode = root.createElement('flow')
        parentNode.setAttribute('type', 'class')
        parentNode.setAttribute('name', flow.getName())
        parentNode.setAttribute('parent', flow.getParentName())
        flow.getFunctions().forEach(scriptFunction => {
            const functionNode = root.createElement('function')
            functionNode.setAttribute('name', scriptFunction.getName())
            const {x, y, z} = scriptFunction.getCamera().getPosition()
            functionNode.setAttribute('view', `${x},${y},${z}`)
            scriptFunction.getNodes().forEach(node => {
                functionNode.appendChild(NodeScriptXmlGenerator.get().getXmlNode(node, root))
            })
            scriptFunction.getNodes().forEach(node => {
                node.getInputs().forEach(input => {
                    if (scriptFunction.findNodeById(input.getSourceNodeId())) {
                        functionNode.appendChild(EdgeScriptXmlGenerator.get().getXmlNode({input, node}, root))
                    }
                })
            })
            parentNode.appendChild(functionNode)
        })
        root.appendChild(parentNode)
        return root
    }

    /**
     * @return {AssetScriptXmlGenerator|*}
     */
    static get() {
        return super.get()
    }

}