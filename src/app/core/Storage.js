import XmlSerDe from '../serde/XmlSerDe.js'
import JsSerDe from '../serde/JsSerDe.js'
import SchemaValidator from '../schema/SchemaValidator.js'

/**
 * Utils to manage the storage of data over time.
 * Handle clones and manage conflicts
 * @property {Map<string, *>} data
 */
class Storage {

    /**
     * @type {Storage}
     */
    static instance

    constructor() {
        this.data = {}
    }

    /**
     * @returns {Storage}
     */
    static get() {
        if (!Storage.instance) {
            Storage.instance = new Storage()
        }
        return Storage.instance
    }

    /**
     * Update the storage (merge data)
     * @param {string} type
     * @param {Object|Array} data
     */
    update(type, data) {
        this.data[type] = _.cloneDeep(data)
        return this
    }

    /**
     * Update the storage and validate data
     * @param {string} type
     * @param {Object|Array} data
     * @param {boolean} forGame
     */
    async updateAndValidate(type, data, forGame = false) {
        const validData = await SchemaValidator.get().validate(type, data, forGame)
        this.data[type] = _.cloneDeep(validData)
        return this
    }

    /**
     * Load and validate data to the given target
     * @param {string} type
     * @param {Object|Array} data
     * @param {Object} target
     */
    async load(type, data, target) {
        await this.updateAndValidate(type, data)
        target.set(_.cloneDeep(this.data[type]))
    }

    /**
     * Validate and save given data to the storage
     * @param {string} type
     * @param {Object|Array} data
     */
    async save(type, data) {
        await this.updateAndValidate(type, data)
    }

    /**
     * Validate and save given data to the storage (for building game)
     * @param {string} type
     * @param {Object|Array} data
     */
    async saveForGame(type, data) {
        await this.updateAndValidate(type, data, true)
    }

    /**
     * Get data from the storage
     * @param {String} type
     * @return {Object}
     */
    fetch(type) {
        const data = this.data[type]
        return data && _.cloneDeep(data)
    }

    /**
     * Export all data to the given format
     * @param {string} key
     * @param {Storage.format} format
     * @return {string|Object}
     */
    export(key, format) {
        const serde = this.getSerDe(format)
        return new serde().serialize(this.data[key])
    }

    /**
     * Import data from the given data and format
     * @param {string} data
     * @param {Storage.format} format
     * @return {Map<string, *>}
     */
    import(data, format) {
        const serde = this.getSerDe(format)
        return new serde().deserialize(data)
    }

    /**
     * Save data to local storage
     * @param {string} key
     * @param {Object|Array} data
     */
    async saveLocal(key, data) {
        await this.save(key, data)
        localStorage.setItem(key, JSON.stringify(this.data[key]))
    }

    /**
     * Load data from local storage to the target object
     * @param {string} key
     * @param {Object} target
     * @return {Object}
     */
    async loadLocal(key, target) {
        await this.loadJson(key, target, localStorage.getItem(key))
    }

    /**
     * Load data from the given json string
     * @param {string} key
     * @param {Object} target
     * @param {string} jsonString
     * @return {Object}
     */
    async loadJson(key, target, jsonString) {
        const data = JSON.parse(jsonString)
        await this.load(key, data, target)
    }

    reset() {
        localStorage.clear()
    }

    /**
     * @param {Storage.format} format
     * @return {Class}
     */
    getSerDe(format) {
        switch (format) {
            case Storage.format.XML:
                return XmlSerDe
            case Storage.format.WEB:
                return JsSerDe
            case Storage.format.BIN:
                return BinSerDe
            default:
                throw new TypeError(`Export format ${format} not recognized`)
        }
    }

}

Storage.type = {
    ENTITY: 'entities',
    WORLD: 'world'
}

Storage.format = {
    XML: 'xml',
    WEB: 'web',
    BIN: 'bin'
}

export default Storage