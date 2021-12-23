import ANode, {NODE_TYPES} from '../ANode.js'

export default class GetStaticClassVarNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.GET_STATIC_CLASS_VAR
    }

}