import {TYPES} from '../pobject/AttributeType.js'
import NumberHelper from '../utils/NumberHelper.js'
import Vector from '../utils/Vector.js'

export default class AnimationPlayer {

    /**
     * @param {Component} component
     * @param {number} type
     * @param {number} time
     * @param {KeyFrame} prevFrame
     * @param {KeyFrame} nextFrame
     * @return {*}
     */
    static interpolate(component, type, time, prevFrame, nextFrame) {
        const prevTime = prevFrame ? prevFrame.getTime() : time
        const nextTime = nextFrame ? nextFrame.getTime() : prevTime
        const prevValue = prevFrame ? prevFrame.getAttribute().getAttrValue() : null
        const nextValue = nextFrame ? nextFrame.getAttribute().getAttrValue() : prevValue
        if (prevValue === nextValue) {
            return _.cloneDeep(prevValue)
        } else if (prevFrame) {
            if (type === TYPES.NUMBER || type === TYPES.RANGE) {
                return NumberHelper.interpolate(time, prevTime, prevValue, nextTime, nextValue)
            } else if (type === TYPES.VECTOR) {
                return Vector.interpolate(time, prevTime, prevValue, nextTime, nextValue)
            }
        }
    }

}