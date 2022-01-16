import SystemError from '../../exception/type/SystemError.js'

/**
 * @abstract
 */
export default class ScriptXmlGenerator {

    static instance

    /**
     * @param {AScript|ANode|{input: NodeInput, node: ANode}} object
     * @param {HTMLElement|XMLDocument} parent
     * @return {string}
     */
    generate(object, parent = null){
        const xmlSerializer = new XMLSerializer()
        return xmlSerializer.serializeToString(this.getXmlNode(object, parent))
    }

    /**
     * @abstract
     * @param {AScript|ANode|{input: NodeInput, node: ANode}} object
     * @param {HTMLElement|XMLDocument} parent
     * @return {HTMLElement|XMLDocument}
     */
    getXmlNode(object, parent = null){
        throw new SystemError(`${this.constructor.name}.getXmlNode must be implemented`)
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