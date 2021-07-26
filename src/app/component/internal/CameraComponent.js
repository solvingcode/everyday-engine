import Component from '../Component.js'
import {TYPES} from '../../pobject/AttributeType.js'
import Vector from '../../utils/Vector.js'
import Size from '../../pobject/Size.js'

export default class CameraComponent extends Component {

    constructor() {
        super('Camera')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('unitFollow', TYPES.UNIT)
        this.add('trackPoint', TYPES.VECTOR, new Vector())
        this.add('deadZone', TYPES.SIZE, new Size(0))
        this.add('smoothing', TYPES.VECTOR, new Vector())
        this.add('delayTime', TYPES.VECTOR, new Vector())
        this.add('delaySmoothing', TYPES.VECTOR, new Vector())
        this.add('lastUnitFollowPosition', TYPES.VECTOR, new Vector())
        this.add('lookDistance', TYPES.VECTOR, new Vector())
    }

    /**
     * @return {number}
     */
    getUnitFollow() {
        return this.getValue('unitFollow')
    }

    /**
     * @param {number} unitFollow
     */
    setUnitFollow(unitFollow) {
        this.setValue('unitFollow', unitFollow)
    }

    /**
     * @return {Vector}
     */
    getTrackPoint() {
        return this.getValue('trackPoint')
    }

    /**
     * @param {Vector} trackPoint
     */
    setTrackPoint(trackPoint) {
        this.setValue('trackPoint', trackPoint)
    }

    /**
     * @return {Size}
     */
    getDeadZone() {
        return this.getValue('deadZone')
    }

    /**
     * @param {Size} deadZone
     */
    setDeadZone(deadZone) {
        this.setValue('deadZone', deadZone)
    }

    /**
     * @return {Vector}
     */
    getSmoothing() {
        return this.getValue('smoothing')
    }

    /**
     * @param {Vector} smoothing
     */
    setSmoothing(smoothing) {
        this.setValue('smoothing', smoothing)
    }

    /**
     * @return {Vector}
     */
    getDelayTime() {
        return this.getValue('delayTime')
    }

    /**
     * @param {Vector} delayTime
     */
    setDelayTime(delayTime) {
        this.setValue('delayTime', delayTime)
    }

    /**
     * @return {Vector}
     */
    getDelaySmoothing() {
        return this.getValue('delaySmoothing')
    }

    /**
     * @param {Vector} delaySmoothing
     */
    setDelaySmoothing(delaySmoothing) {
        this.setValue('delaySmoothing', delaySmoothing)
    }

    /**
     * @return {Vector}
     */
    getLastUnitFollowPosition() {
        return this.getValue('lastUnitFollowPosition')
    }

    /**
     * @param {Vector} lastUnitFollowPosition
     */
    setLastUnitFollowPosition(lastUnitFollowPosition) {
        this.setValue('lastUnitFollowPosition', lastUnitFollowPosition)
    }

    /**
     * @return {Vector}
     */
    getLookDistance() {
        return this.getValue('lookDistance')
    }

    /**
     * @param {Vector} lookDistance
     */
    setLookDistance(lookDistance) {
        this.setValue('lookDistance', lookDistance)
    }

    /**
     * @override
     */
    isRemovable() {
        return false
    }
}