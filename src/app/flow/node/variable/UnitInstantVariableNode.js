import VariableNode from './VariableNode.js'
import {NODE_TYPES} from '../ANode.js'

export default class UnitInstantVariableNode extends VariableNode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.VAR_UNIT_INSTANT
    }

}