import Component from '../Component.js'
import Vector from '../../utils/Vector.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class TransformComponent extends Component{

    constructor() {
        super('Transform')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('position', TYPES.VECTOR, new Vector())
        this.add('localPosition', TYPES.VECTOR, new Vector())
        this.add('localScale', TYPES.VECTOR, new Vector({x: 1, y: 1}))
        this.add('scale', TYPES.VECTOR, new Vector({x: 1, y: 1}))
        this.add('rotation', TYPES.RANGE, 0, [0, Math.PI * 2, 0.001])
        this.add('localRotation', TYPES.RANGE, 0, [0, Math.PI * 2, 0.001])
        this.add('positionUpdated', TYPES.BOOLEAN, true)
        this.add('scaleUpdated', TYPES.BOOLEAN, true)
        this.add('localPositionUpdated', TYPES.BOOLEAN, false)
        this.add('rotationUpdated', TYPES.BOOLEAN, true)
    }

    /**
     * @override
     */
    getExcludeFields() {
        return ['positionUpdated', 'scaleUpdated', 'localPositionUpdated', 'rotationUpdated']
    }

    /**
     * @return {Vector}
     */
    getPosition(){
        return this.getValue('position')
    }

    /**
     * @param {Vector} position
     */
    setPosition(position){
        this.setValue('position', position)
        this.setPositionUpdated(true)
    }

    /**
     * @return {number}
     */
    getRotation(){
        return this.getValue('rotation')
    }

    /**
     * @param {number|string} rotation
     */
    setRotation(rotation){
        this.setValue('rotation', parseFloat(rotation))
        this.setRotationUpdated(true)
    }

    /**
     * @return {number}
     */
    getLocalRotation(){
        return this.getValue('localRotation')
    }

    /**
     * @param {number|string} localRotation
     */
    setLocalRotation(localRotation){
        this.setValue('localRotation', parseFloat(localRotation))
    }

    /**
     * @return {Vector}
     */
    getScale(){
        return this.getValue('scale')
    }

    /**
     * @param {Vector} scale
     */
    setScale(scale){
        this.setValue('scale', scale)
        this.setScaleUpdated(true)
    }

    /**
     * @return {Vector}
     */
    getLocalPosition(){
        return this.getValue('localPosition')
    }

    /**
     * @param {Vector} localPosition
     */
    setLocalPosition(localPosition){
        this.setValue('localPosition', localPosition)
        this.setLocalPositionUpdated(true)
    }

    /**
     * @return {Vector}
     */
    getLocalScale(){
        return this.getValue('localScale')
    }

    /**
     * @param {Vector} localScale
     */
    setLocalScale(localScale){
        this.setValue('localScale', localScale)
    }

    /**
     * @return {boolean}
     */
    getPositionUpdated(){
        return this.getValue('positionUpdated')
    }

    /**
     * @param {boolean} positionUpdated
     */
    setPositionUpdated(positionUpdated){
        this.setValue('positionUpdated', positionUpdated)
    }

    /**
     * @return {boolean}
     */
    getLocalPositionUpdated(){
        return this.getValue('localPositionUpdated')
    }

    /**
     * @param {boolean} localPositionUpdated
     */
    setLocalPositionUpdated(localPositionUpdated){
        this.setValue('localPositionUpdated', localPositionUpdated)
    }

    /**
     * @return {boolean}
     */
    getScaleUpdated(){
        return this.getValue('scaleUpdated')
    }

    /**
     * @param {boolean} scaleUpdated
     */
    setScaleUpdated(scaleUpdated){
        this.setValue('scaleUpdated', scaleUpdated)
    }

    /**
     * @return {boolean}
     */
    getRotationUpdated(){
        return this.getValue('rotationUpdated')
    }

    /**
     * @param {boolean} rotationUpdated
     */
    setRotationUpdated(rotationUpdated){
        this.setValue('rotationUpdated', rotationUpdated)
    }

    /**
     * @override
     */
    isRemovable() {
        return false
    }
}