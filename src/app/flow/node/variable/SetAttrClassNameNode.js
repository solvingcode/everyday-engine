import ANode, {NODE_TYPES} from '../ANode.js'

export default class SetAttrClassNameNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.SET_ATTR_CLASS_NAME
    }

}