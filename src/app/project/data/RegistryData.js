import Data from './Data.js'

export default class RegistryData extends Data{

    name
    registry

    /**
     * @param {string} name
     */
    constructor(name) {
        super()
        this.name = name
        this.registry = []
    }

    /**
     * @param {string} name
     */
    setName(name){
        this.name = name
    }

    /**
     * @return {string}
     */
    getName(){
        return this.name
    }

    /**
     * @param {*[]} registry
     */
    setRegistry(registry){
        this.registry = registry
    }

    /**
     * @return {*[]}
     */
    getRegistry(){
        return this.registry
    }

    /**
     * @param {*[]} registry
     */
    concatRegistry(registry){
        this.concat(
            this.registry,
            registry,
            (tItem, sItem) => tItem.getName() === sItem.getName()
        )
    }

}