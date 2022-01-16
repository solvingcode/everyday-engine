import ANode, {NODE_TYPES} from './ANode.js'

export default class BranchNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.BRANCH
    }

}