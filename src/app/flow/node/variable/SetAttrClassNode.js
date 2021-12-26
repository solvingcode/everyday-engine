import ANode, {NODE_TYPES} from '../ANode.js'

export default class SetAttrClassNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.SET_ATTR_CLASS
    }

}