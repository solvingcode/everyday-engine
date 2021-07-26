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
        this.add('trackPoint', TYPES.VECTOR, new Vector())
        this.add('deadZone', TYPES.SIZE, new Size(0))
        this.add('unitFollow', TYPES.UNIT)
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
     * @override
     */
    isRemovable() {
        return false
    }
}