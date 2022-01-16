/**
 * @abstract
 * @class {SerDe}
 */
class SerDe {

    /**
     * @abstract
     * @param {Object} data
     * @param {string} key
     * @return {string}
     */
    serialize(data, key) {
        throw new TypeError('SerDe.serialize must be implemented')
    }

    /**
     * @abstract
     * @param {Object|string} data
     * @param {string} key
     * @return {Object|Map<string, *>}
     */
    deserialize(data, key) {
        throw new TypeError('SerDe.deserialize must be implemented')
    }

}

export default SerDe