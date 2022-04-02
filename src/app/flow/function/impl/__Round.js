export default function (value, digits) {
    const numberDigits = parseInt(digits)
    return Math.round(value * Math.pow(1, numberDigits)) / Math.pow(1, numberDigits)
}