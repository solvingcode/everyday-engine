import ANode, {NODE_TYPES} from '../ANode.js'

export default class GetClassVarNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.GET_CLASS_VAR
    }

}