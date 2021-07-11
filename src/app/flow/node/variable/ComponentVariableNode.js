import VariableNode from './VariableNode.js'
import {NODE_TYPES} from '../ANode.js'

export default class ComponentVariableNode extends VariableNode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.VAR_COMPONENT
    }

}