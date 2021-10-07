import ANode, {NODE_TYPES} from './ANode.js'

export default class ThenNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.THEN
    }

}