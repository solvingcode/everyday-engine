import Vector from '../../../utils/Vector.js'

export default function (value1, value2) {
    let result
    if (value1 instanceof Vector && value2 instanceof Vector) {
        result = value1.equals(value2)
    } else if (_.isNumber(value1) && _.isNumber(value2)) {
        result = parseFloat(value1) === parseFloat(value2)
    } else {
        result = value1 === value2
    }
    return result
}