import Component from '../Component.js'
import Vector from '../../utils/Vector.js'
import {TYPES} from '../../pobject/AttributeType.js'
import SystemError from '../../exception/type/SystemError.js'

export default class TransformComponent extends Component {

    constructor() {
        super('Transform')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('position', TYPES.VECTOR, new Vector())
        this.add('physicsPosition', TYPES.VECTOR, new Vector())
        this.add('physicsUpdated', TYPES.BOOLEAN, false)
        this.add('physicsPositionSync', TYPES.BOOLEAN, true)
        this.add('screenPosition', TYPES.VECTOR, new Vector())
        this.add('scale', TYPES.VECTOR, new Vector())
        this.add('rotation', TYPES.RANGE, 0, [0, Math.PI * 2, 0.001])
        this.add('localPosition', TYPES.VECTOR, new Vector())
        this.add('localScale', TYPES.VECTOR, new Vector())
        this.add('localRotation', TYPES.RANGE, 0, [0, Math.PI * 2, 0.001])
        this.add('lastLocalScale', TYPES.VECTOR)
        this.add('lastLocalPosition', TYPES.VECTOR)
        this.add('lastLocalRotation', TYPES.NUMBER)
    }

    /**
     * @override
     */
    getExcludeFields() {
        return ['position', 'scale', 'rotation', 'lastLocalScale', 'lastLocalPosition', 'lastLocalRotation',
            'screenPosition', 'physicsPosition', 'physicsPositionNotSync']
    }

    /**
     * @return {Vector}
     */
    getPosition() {
        return this.getValue('position')
    }

    /**
     * @param {Vector} position
     * @param {boolean} force
     */
    setPosition(position, force = false) {
        if (!force) {
            throw new SystemError(`setPosition is not authorized`)
        }
        this.setValue('position', _.cloneDeep(position))
    }

    /**
     * @return {number}
     */
    getRotation() {
        return this.getValue('rotation')
    }

    /**
     * @param {number|string} rotation
     * @param {boolean} force
     */
    setRotation(rotation, force = false) {
        if (!force) {
            throw new SystemError(`setRotation is not authorized`)
        }
        this.setValue('rotation', parseFloat(rotation))
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
     * @param {boolean} force
     */
    setScale(scale, force = false) {
        if (!force) {
            throw new SystemError(`setScale is not authorized`)
        }
        this.setValue('scale', _.cloneDeep(scale))
    }

    /**
     * @return {Vector}
     */
    getPhysicsPosition() {
        return this.getValue('physicsPosition')
    }

    /**
     * @param {Vector} physicsPosition
     */
    setPhysicsPosition(physicsPosition) {
        this.setValue('physicsPosition', _.cloneDeep(physicsPosition))
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
        this.setPhysicsPositionSync(false)
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
     * @return {number}
     */
    getLastLocalRotation() {
        return this.getValue('lastLocalRotation')
    }

    /**
     * @param {number} lastLocalRotation
     */
    setLastLocalRotation(lastLocalRotation) {
        this.setValue('lastLocalRotation', lastLocalRotation)
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
    getPhysicsUpdated(){
        return this.getValue('physicsUpdated')
    }

    /**
     * @param {boolean} physicsUpdated
     */
    setPhysicsUpdated(physicsUpdated) {
        this.setValue('physicsUpdated', physicsUpdated)
    }

    /**
     * @return {boolean}
     */
    getPhysicsPositionSync(){
        return this.getValue('physicsPositionSync')
    }

    /**
     * @param {boolean} physicsPositionSync
     */
    setPhysicsPositionSync(physicsPositionSync) {
        this.setValue('physicsPositionSync', physicsPositionSync)
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
    getLocalScaleUpdated() {
        return !_.isEqual(this.getLocalScale(), this.getLastLocalScale())
    }

    /**
     * @return {boolean}
     */
    getLocalRotationUpdated() {
        return !_.isEqual(this.getLocalRotation(), this.getLastLocalRotation())
    }

    /**
     * @override
     */
    isRemovable() {
        return false
    }
}