import VariableNode from './VariableNode.js'
import {NODE_TYPES} from '../ANode.js'

export default class UnitVariableNode extends VariableNode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.VAR_UNIT
    }

}