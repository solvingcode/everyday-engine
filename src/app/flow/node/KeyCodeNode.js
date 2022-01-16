import ANode, {NODE_TYPES} from './ANode.js'

export default class KeyCodeNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.KEY_CODE
    }

}