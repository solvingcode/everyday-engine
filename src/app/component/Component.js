import ComponentData from '../project/data/ComponentData.js'

/**
 * @abstract
 */
export default class Component extends ComponentData{

    /**
     * @abstract
     * @return {FormField[]}
     */
    getFormFields(){
        throw new TypeError(`${this.constructor.name}.getFormFields must be implement`)
    }

}