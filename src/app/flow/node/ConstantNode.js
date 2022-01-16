import ANode, {NODE_TYPES} from './ANode.js'

export default class ConstantNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.CONSTANT
    }

}