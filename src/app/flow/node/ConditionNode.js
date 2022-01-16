import ANode, {NODE_TYPES} from './ANode.js'

export default class ConditionNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.CONDITION
    }

}