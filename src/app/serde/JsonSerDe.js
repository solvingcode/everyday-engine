import SerDe from './SerDe.js'

/**
 * @class {JsonSerDe}
 * @extends {SerDe}
 */
class JsonSerDe extends SerDe {

    /**
     * @override
     */
    serialize(data, key) {
        if (_.isArray(data)) {
            throw new TypeError('Data to serialize must be an Object')
        }
        return JSON.stringify(data)
    }

    /**
     * @override
     */
    deserialize(data, key) {
        if (!_.isString(data)) {
            throw new TypeError('Data to deserialize must be a String')
        }
        return JSON.parse(data)
    }

}

export default JsonSerDe