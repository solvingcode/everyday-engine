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
        this.addInternal('animation', TYPES.ANIMATION)
        this.addInternal('time', TYPES.NUMBER)
        this.addInternal('loopTimes', TYPES.NUMBER)
        this.addInternal('playing', TYPES.BOOLEAN)
    }

    /**
     * @override
     */
    getExcludeFields() {
        return ['script', 'started', 'initialized', 'time', 'loopTimes', 'animation', 'playing']
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
     * @return {boolean}
     */
    getPlaying() {
        return this.getValue('playing')
    }

    /**
     * @param {boolean} playing
     */
    setPlaying(playing) {
        this.setValue('playing', playing)
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