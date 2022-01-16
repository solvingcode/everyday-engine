import ANode, {NODE_TYPES} from './ANode.js'

export default class EventNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.EVENT
    }

}