import Component from '../Component.js'
import Vector from '../../utils/Vector.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class TransformComponent extends Component {

    constructor() {
        super('Transform')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('position', TYPES.VECTOR, new Vector())
        this.add('localPosition', TYPES.VECTOR, new Vector())
        this.add('screenPosition', TYPES.VECTOR, new Vector())
        this.add('localScale', TYPES.VECTOR, new Vector())
        this.add('scale', TYPES.VECTOR, new Vector())
        this.add('rotation', TYPES.RANGE, 0, [0, Math.PI * 2, 0.001])
        this.add('localRotation', TYPES.RANGE, 0, [0, Math.PI * 2, 0.001])
        this.add('lastScale', TYPES.VECTOR, new Vector())
        this.add('lastLocalScale', TYPES.VECTOR, new Vector())
        this.add('lastPosition', TYPES.VECTOR, new Vector())
        this.add('lastLocalPosition', TYPES.VECTOR, new Vector())
        this.add('lastRotation', TYPES.VECTOR, new Vector())
    }

    /**
     * @override
     */
    getExcludeFields() {
        return ['lastPosition', 'lastScale', 'lastLocalScale', 'lastLocalPosition', 'lastRotation', 'screenPosition']
    }

    /**
     * @return {Vector}
     */
    getPosition() {
        return this.getValue('position')
    }

    /**
     * @param {Vector} position
     */
    setPosition(position) {
        this.setValue('position', _.cloneDeep(position))
    }

    /**
     * @return {Vector}
     */
    getLastPosition() {
        return this.getValue('lastPosition')
    }

    /**
     * @param {Vector} position
     */
    setLastPosition(position) {
        this.setValue('lastPosition', _.cloneDeep(position))
    }

    /**
     * @return {number}
     */
    getRotation() {
        return this.getValue('rotation')
    }

    /**
     * @param {number|string} rotation
     */
    setRotation(rotation) {
        this.setValue('rotation', parseFloat(rotation))
    }

    /**
     * @return {number}
     */
    getLastRotation() {
        return this.getValue('lastRotation')
    }

    /**
     * @param {number|string} rotation
     */
    setLastRotation(rotation) {
        this.setValue('lastRotation', parseFloat(rotation))
    }

    /**
     * @return {number}
     */
    getLocalRotation() {
        return this.getValue('localRotation')
    }

    /**
     * @param {number|string} localRotation
     */
    setLocalRotation(localRotation) {
        this.setValue('localRotation', parseFloat(localRotation))
    }

    /**
     * @return {Vector}
     */
    getScale() {
        return this.getValue('scale')
    }

    /**
     * @param {Vector} scale
     */
    setScale(scale) {
        this.setValue('scale', _.cloneDeep(scale))
    }

    /**
     * @return {Vector}
     */
    getLastScale() {
        return this.getValue('lastScale')
    }

    /**
     * @param {Vector} scale
     */
    setLastScale(scale) {
        this.setValue('lastScale', _.cloneDeep(scale))
    }

    /**
     * @return {Vector}
     */
    getLastLocalScale() {
        return this.getValue('lastLocalScale')
    }

    /**
     * @param {Vector} scale
     */
    setLastLocalScale(scale) {
        this.setValue('lastLocalScale', _.cloneDeep(scale))
    }

    /**
     * @return {Vector}
     */
    getLocalPosition() {
        return this.getValue('localPosition')
    }

    /**
     * @param {Vector} localPosition
     */
    setLocalPosition(localPosition) {
        this.setValue('localPosition', _.cloneDeep(localPosition))
    }

    /**
     * @return {Vector}
     */
    getLastLocalPosition() {
        return this.getValue('lastLocalPosition')
    }

    /**
     * @param {Vector} localPosition
     */
    setLastLocalPosition(localPosition) {
        this.setValue('lastLocalPosition', _.cloneDeep(localPosition))
    }

    /**
     * @return {Vector}
     */
    getScreenPosition() {
        return this.getValue('screenPosition')
    }

    /**
     * @param {Vector} screenPosition
     */
    setScreenPosition(screenPosition) {
        this.setValue('screenPosition', _.cloneDeep(screenPosition))
    }

    /**
     * @return {Vector}
     */
    getLocalScale() {
        return this.getValue('localScale')
    }

    /**
     * @param {Vector} localScale
     */
    setLocalScale(localScale) {
        this.setValue('localScale', _.cloneDeep(localScale))
    }

    /**
     * @return {boolean}
     */
    getPositionUpdated() {
        return !_.isEqual(this.getPosition(), this.getLastPosition())
    }

    /**
     * @return {boolean}
     */
    getLocalPositionUpdated() {
        return !_.isEqual(this.getLocalPosition(), this.getLastLocalPosition())
    }

    /**
     * @return {boolean}
     */
    getScaleUpdated() {
        return !_.isEqual(this.getScale(), this.getLastScale())
    }

    /**
     * @return {boolean}
     */
    getLocalScaleUpdated() {
        return !_.isEqual(this.getLocalScale(), this.getLastLocalScale())
    }

    /**
     * @return {boolean}
     */
    getRotationUpdated() {
        return this.getRotation() !== this.getLastRotation()
    }

    /**
     * @override
     */
    isRemovable() {
        return false
    }
}