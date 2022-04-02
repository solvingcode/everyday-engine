import {Vector} from '../../../compiler/__.js'

export default function (value1, value2) {
    let result
    if (value1 instanceof Vector && value2 instanceof Vector) {
        result = Vector.subtract(value1, value2)
    } else {
        result = parseFloat(value1) - parseFloat(value2)
    }
    return result
}