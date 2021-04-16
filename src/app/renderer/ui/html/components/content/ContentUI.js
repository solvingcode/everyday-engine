/**
 * @abstract
 */
export default class ContentUI{

    /**
     * @param {*} content
     * @return {HTMLElement}
     */
    static getElement(content){
        throw new TypeError(`${this.constructor.name}.getElement must be implemented`)
    }

}