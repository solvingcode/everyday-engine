import ANode, {NODE_TYPES} from './ANode.js'

export default class ComponentNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.COMPONENT
    }

}