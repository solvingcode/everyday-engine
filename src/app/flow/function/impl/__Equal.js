import Vector from '../../../utils/Vector.js'

export default function (valueA, valueB) {
    let result
    if (valueA instanceof Vector && valueB instanceof Vector) {
        result = valueA.equals(valueB)
    } else if (_.isNumber(valueA) && _.isNumber(valueB)) {
        result = parseFloat(valueA) === parseFloat(valueB)
    } else {
        result = valueA === valueB
    }
    return result
}