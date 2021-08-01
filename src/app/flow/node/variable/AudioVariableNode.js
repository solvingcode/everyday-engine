import VariableNode from './VariableNode.js'
import {NODE_TYPES} from '../ANode.js'

export default class AudioVariableNode extends VariableNode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.VAR_AUDIO
    }

}