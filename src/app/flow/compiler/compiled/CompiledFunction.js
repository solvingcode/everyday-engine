export default class CompiledFunction {

    /**
     * @type {string}
     */
    name

    /**
     * @type {string}
     */
    code

    /**
     * @type {string[]}
     */
    params

    constructor() {
        this.params = []
    }

    /**
     * @return {string}
     */
    getCode(){
        return this.code
    }

    /**
     * @param {string} code
     */
    setCode(code){
        this.code = code
    }

    /**
     * @return {string[]}
     */
    getParams(){
        return this.params
    }

    /**
     * @param {string[]} params
     */
    setParams(params){
        this.params = params
    }

    /**
     * @return {string}
     */
    getName(){
        return this.name
    }

    /**
     * @param {string} name
     */
    setName(name){
        this.name = name
    }

}