/**
 * @abstract
 */
export default class ScriptGenerator {

    static instance

    /**
     * @param {string} name
     * @return {string}
     */
    generate(name){
        return `<flow type="class" name="${name}"></flow>`
    }

    /**
     * @return {ScriptGenerator}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}