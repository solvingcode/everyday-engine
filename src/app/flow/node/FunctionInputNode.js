import ANode, {NODE_TYPES} from './ANode.js'

export default class FunctionInputNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.INPUT
    }

}