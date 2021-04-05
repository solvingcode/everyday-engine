export default class FunctionRegistry{

    static instance

    /**
     * @private
     */
    constructor() {
        /**
         * @private
         * @type {AFunction[]}
         */
        this.registry = []
    }

    /**
     * @param {AFunction[]} registry
     */
    init(registry){
        this.registry = registry
    }

    /**
     * @param {AFunction} func
     */
    register(func){
        if(this.getFunction(func.getName())){
            throw new TypeError(`Function width name ${func.getName()} is already registered`)
        }
        this.registry.push(func)
    }

    /**
     * @param {string} name
     * @return {AFunction}
     */
    getFunction(name){
        return this.registry.find(func => func.getName() === name)
    }

    /**
     * @return {AFunction[]}
     */
    getFunctions(){
        return this.registry
    }

    /**
     * @return {FunctionRegistry}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}