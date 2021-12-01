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
        this.add('animation', TYPES.ANIMATION)
        this.add('time', TYPES.NUMBER)
        this.add('loopTimes', TYPES.NUMBER)
    }

    /**
     * @override
     */
    getExcludeFields() {
        return ['started']
    }

    /**
     * @return {number}
     */
    getAnimation() {
        return this.getValue('animation')
    }

    /**
     * @param {number|string} animation
     */
    setAnimation(animation) {
        this.setValue('animation', parseInt(animation))
    }

    /**
     * @return {number}
     */
    getTime() {
        return this.getValue('time')
    }

    /**
     * @param {number} time
     */
    setTime(time) {
        this.setValue('time', time)
    }

    /**
     * @return {number}
     */
    getLoopTimes() {
        return this.getValue('loopTimes')
    }

    /**
     * @param {number} loopTimes
     */
    setLoopTimes(loopTimes) {
        this.setValue('loopTimes', loopTimes)
    }
}