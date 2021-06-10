import {TYPES} from '../../pobject/AttributeType.js'
import ScriptComponent from './ScriptComponent.js'

export default class AnimationComponent extends ScriptComponent {

    /**
     * @param {Asset} asset
     */
    constructor(asset) {
        super(asset)
        this.setName('Animation')
    }

    /**
     * @override
     */
    initAttributes() {
        super.initAttributes()
        this.add('animation', TYPES.ANIMATION)
    }

    /**
     * @return {number}
     */
    getAnimation() {
        return this.getValue('animation')
    }

    /**
     * @param {number} animation
     */
    setAnimation(animation) {
        this.setValue('animation', animation)
    }
}