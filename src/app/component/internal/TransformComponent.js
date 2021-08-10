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
        this.add('scale', TYPES.VECTOR, new Vector({x: 1, y: 1}))
        this.add('rotation', TYPES.RANGE, 0, [0, Math.PI, 0.001])
        this.add('positionUpdated', TYPES.BOOLEAN, true)
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
        this.setValue('positionUpdated', true)
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
     * @override
     */
    isRemovable() {
        return false
    }
}