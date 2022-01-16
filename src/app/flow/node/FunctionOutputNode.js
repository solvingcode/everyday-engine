import ANode, {NODE_TYPES} from './ANode.js'

export default class FunctionOutputNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.OUTPUT
    }

}