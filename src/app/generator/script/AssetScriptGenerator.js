/**
 * @abstract
 */
export default class AssetScriptGenerator {

    static instance

    /**
     * @abstract
     * @param {AScript} flow
     * @return {string}
     */
    generate(flow){
        throw new TypeError(`${this.constructor.name}.generate must be implemented`)
    }

    /**
     * @return {*}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}