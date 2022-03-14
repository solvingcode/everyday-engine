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