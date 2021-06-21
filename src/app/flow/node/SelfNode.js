import ANode, {NODE_TYPES} from './ANode.js'

export default class SelfNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.SELF
    }

}