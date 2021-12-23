import ANode, {NODE_TYPES} from '../ANode.js'

export default class SetStaticClassVarNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.SET_STATIC_CLASS_VAR
    }

}