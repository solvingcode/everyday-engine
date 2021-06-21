import ANode, {NODE_TYPES} from './ANode.js'

export default class ReferenceNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.REFERENCE
    }

}