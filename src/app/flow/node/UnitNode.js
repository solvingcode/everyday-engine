import ANode, {NODE_TYPES} from './ANode.js'

export default class UnitNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.UNIT
    }

}