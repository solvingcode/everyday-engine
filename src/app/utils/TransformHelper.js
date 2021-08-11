import {SCALE_FACTOR} from '../core/Constant.js'
import Vector from './Vector.js'
import Size from '../pobject/Size.js'

export default class TransformHelper{

    /**
     * @param {Size} size
     * @return {Vector}
     */
    static getScaleFromSize(size){
        return new Vector({
            x: size.width / SCALE_FACTOR,
            y: size.height / SCALE_FACTOR
        })
    }

    /**
     * @param {Vector} scale
     * @return {Size}
     */
    static getSizeFromScale(scale){
        return new Size({
            width: Math.abs(scale.getX() * SCALE_FACTOR),
            height: Math.abs(scale.getY() * SCALE_FACTOR)
        })
    }

    /**
     * @param {Vector} scale
     * @return {Vector}
     */
    static getScaleDirection(scale){
        return Vector
            .linearDivide(scale, Vector.abs(scale))
    }

}