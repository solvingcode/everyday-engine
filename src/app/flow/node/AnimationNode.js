import ANode, {NODE_TYPES} from './ANode.js'

export default class AnimationNode extends ANode{

    /**
     * @override
     */
    getType() {
        return NODE_TYPES.ANIMATION
    }

}