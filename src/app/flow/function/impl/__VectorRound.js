import Vector from '../../../utils/Vector.js'

export default function (vector, digits) {
    const numberDigits = parseInt(digits)
    return new Vector({
        x: Math.round(vector.getX() * Math.pow(1, numberDigits)) / Math.pow(1, numberDigits),
        y: Math.round(vector.getY() * Math.pow(1, numberDigits)) / Math.pow(1, numberDigits),
        z: Math.round(vector.getZ() * Math.pow(1, numberDigits)) / Math.pow(1, numberDigits)
    })
}