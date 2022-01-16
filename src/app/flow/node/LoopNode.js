import ANode, {NODE_TYPES} from './ANode.js'

export default class LoopNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.LOOP
    }

}