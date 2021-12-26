import Layout from '../../../../Layout.js'
import AddScriptNodeInputFormMenuItem from '../add/AddScriptNodeInputFormMenuItem.js'
import ListElementMenuItem from '../../../list/ListElementMenuItem.js'
import World from '../../../../../world/World.js'
import {NODE_TYPES} from '../../../../../flow/node/ANode.js'

export default class AddScriptNodeInputElementMenuItem extends ListElementMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            name: '',
            title: '',
            stateCode: '',
            type: Layout.type.LIST_ELEMENT
        })
    }

    /**
     * @override
     */
    doSetData(data) {
        const world = World.get()
        const {input, node} = data.bind
        const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
        const formData = new AddScriptNodeInputForm(input)
        const nodeInput = node.getInputNodeAttached(input.getAttrName())
        if (nodeInput) {
            const sourceNode = script.findNodeById(nodeInput.getSourceNodeId())
            if(sourceNode){
                if (sourceNode.getType() === NODE_TYPES.CONSTANT) {
                    formData.setValue(sourceNode.getName())
                } else if (sourceNode.getType() === NODE_TYPES.SELF) {
                    formData.setValue(true)
                }
            }
        }
        this.items = [
            new AddScriptNodeInputFormMenuItem(this, formData)
        ]
    }

    /**
     * @override
     */
    getId() {
        return this.getDataBind().input.getId()
    }

    /**
     * @override
     */
    getName() {
        return this.getDataBind().input.getName()
    }

    /**
     * @override
     */
    setupItems() {
        this.doSetData(this.data)
    }

}

export class AddScriptNodeInputForm {

    /**
     * @type {DynamicAttribute}
     */
    attribute

    /**
     * @type {string|boolean}
     */
    value

    /**
     * @param {DynamicAttribute} attribute
     */
    constructor(attribute) {
        this.attribute = attribute
        this.value = ''
    }

    /**
     * @return {DynamicAttribute}
     */
    getAttribute() {
        return this.attribute
    }

    /**
     * @param {string|boolean} value
     */
    setValue(value) {
        this.value = value
    }

    /**
     * @return {string|boolean}
     */
    getValue() {
        return this.value
    }

    /**
     * @return {boolean}
     */
    isValue() {
        if (this.value === '0') {
            return false
        }
        return !!this.value
    }

}