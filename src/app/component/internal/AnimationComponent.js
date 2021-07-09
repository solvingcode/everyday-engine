import {TYPES} from '../../pobject/AttributeType.js'
import ScriptComponent from './ScriptComponent.js'

export default class AnimationComponent extends ScriptComponent {

    constructor() {
        super()
        this.setName('Animation')
    }

    /**
     * @override
     */
    isUnique() {
        return true
    }

    /**
     * @override
     */
    initAttributes() {
        super.initAttributes()
        this.add('animation', TYPES.NUMBER)
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