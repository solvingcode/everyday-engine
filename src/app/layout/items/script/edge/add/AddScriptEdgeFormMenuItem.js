import Layout from '../../../../Layout.js'
import FormMenuItem from '../../../form/FormMenuItem.js'
import World from '../../../../../world/World.js'
import NodeHelper from '../../../../../utils/NodeHelper.js'

export default class AddScriptEdgeFormMenuItem extends FormMenuItem {

    /**
     * @param {MenuItem} parent
     * @param {AddScriptEdgeForm} addEdgeForm
     */
    constructor(parent, addEdgeForm) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {addEdgeForm}
    }

    /**
     * @override
     */
    generateFields() {
        const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
        let sourceNodes = []
        let targetNodes = []
        let connections = []
        if (script) {
            const object = this.getFormObject()
            sourceNodes = script.getNodes().map(node => ({
                value: node.getId(),
                label: node.getName()
            }))
            targetNodes = script.getNodes().filter(node => node.getId() !== parseInt(object.getSourceId()))
                .map(node => ({
                    value: node.getId(),
                    label: node.getName()
                }))
            if(object.getTargetId()){
                const targetNode = script.findNodeById(parseInt(object.getTargetId()))
                if(targetNode){
                    const sourceInputs = NodeHelper.getSourceNode(targetNode).getInputs()
                    connections = sourceInputs.map(sourceInput => ({
                        value: sourceInput.getId(),
                        label: sourceInput.getAttrName()
                    }))
                }
            }
        }
        return [
            {
                bind: 'sourceId',
                label: 'Source',
                type: Layout.form.DROPDOWN,
                list: sourceNodes
            },
            {
                bind: 'targetId',
                label: 'Target',
                type: Layout.form.DROPDOWN,
                list: targetNodes
            },
            {
                bind: 'connection',
                label: 'Connection',
                type: Layout.form.DROPDOWN,
                list: connections
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.addEdgeForm
    }

}