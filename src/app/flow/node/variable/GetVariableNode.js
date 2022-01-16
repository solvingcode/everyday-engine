import ANode, {NODE_TYPES} from '../ANode.js'

export default class GetVariableNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.GET_VAR
    }

}