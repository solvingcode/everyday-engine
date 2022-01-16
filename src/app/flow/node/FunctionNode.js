import ANode, {NODE_TYPES} from './ANode.js'

export default class FunctionNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.FUNCTION
    }

}