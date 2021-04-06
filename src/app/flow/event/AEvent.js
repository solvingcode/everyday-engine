import AEmptyStackFunction from '../function/AEmptyStackFunction.js'

export default class AEvent extends AEmptyStackFunction{

    /**
     * @type {string[]}
     */
    functionNames

    /**
     * @param {string} functionName
     */
    addFunction(functionName){
        if(!this.hasFunctionName(functionName)){
            this.functionNames.push(functionName)
        }
    }

    /**
     * @param {string} functionName
     */
    removeFunction(functionName){
       if(this.hasFunctionName(functionName)){
           const indexFunction = this.functionNames.findIndex(funcName => funcName === name)
           this.functionNames.splice(indexFunction, 1)
       }
    }

    /**
     * @param {string} name
     * @return {boolean}
     */
    hasFunctionName(name){
        return !!this.functionNames.find(funcName => funcName === name)
    }

}