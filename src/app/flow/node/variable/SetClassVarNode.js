import ANode, {NODE_TYPES} from '../ANode.js'

export default class SetClassVarNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.SET_CLASS_VAR
    }

}