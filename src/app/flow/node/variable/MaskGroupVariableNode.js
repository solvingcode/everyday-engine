import VariableNode from './VariableNode.js'
import {NODE_TYPES} from '../ANode.js'

export default class MaskGroupVariableNode extends VariableNode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.VAR_MASK_GROUP
    }

}