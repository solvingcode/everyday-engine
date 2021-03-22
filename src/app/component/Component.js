import ComponentData from '../project/data/ComponentData.js'

export default class Component extends ComponentData{

    /**
     * @override
     * @return {FormField[]}
     */
    getFormFields(){
        throw new TypeError(`${this.constructor.name}.getFormFields must be implement`)
    }

}