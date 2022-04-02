import Data from './Data.js'

export default class CompiledClassData extends Data {

    /**
     * @type {string}
     */
    name

    /**
     * @type {string}
     */
    code

    /**
     * @param {string} name
     */
    constructor(name) {
        super()
        this.name = name
    }

    /**
     * @return {string}
     */
    getCode() {
        return this.code
    }

    /**
     * @param {string} code
     */
    setCode(code) {
        this.code = code
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

}