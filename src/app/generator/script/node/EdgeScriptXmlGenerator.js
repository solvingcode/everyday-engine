import ScriptXmlGenerator from '../ScriptXmlGenerator.js'

export default class EdgeScriptXmlGenerator extends ScriptXmlGenerator {

    /**
     * @override
     */
    getXmlNode(nodeInput, parent) {
        const root = parent || document.implementation.createDocument('', '', null)
        const edgeNode = root.createElement('edge')
        edgeNode.setAttribute('source', `${nodeInput.input.getSourceNodeId()}`)
        edgeNode.setAttribute('target', `${nodeInput.node.getId()}`)
        edgeNode.setAttribute('output', nodeInput.input.getSourceName() || '')
        edgeNode.setAttribute('connection', nodeInput.input.getTargetName() || '')
        return edgeNode
    }

    /**
     * @return {NodeScriptXmlGenerator}
     */
    static get() {
        return super.get()
    }

}