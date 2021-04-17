export default class PrimitiveHelper{

    /**
     * @param {string|number|boolean} value
     * @param {string} type
     * @return {string|number|boolean}
     */
    static validate(value, type){
        let newValue
        switch (type) {
            case 'number':
                newValue = _.isNumber(parseFloat(value)) ? parseFloat(value) : null
                break
            case 'string':
                newValue = _.isString(value) ? value : ''
                break
            case 'boolean':
                newValue = value === true || value === 'true'
                break
            default:
                throw new TypeError(`Primitive type ${type} not supported`)
        }
        return newValue
    }

}