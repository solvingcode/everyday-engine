import ANode, {NODE_TYPES} from '../ANode.js'

export default class GetAttrClassNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.GET_ATTR_CLASS
    }

}