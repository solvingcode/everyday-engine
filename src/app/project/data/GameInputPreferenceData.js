import Data from './Data.js'
import ClientError from '../../exception/type/ClientError.js'
import GameInput from '../../preference/gameInput/GameInput.js'

export default class GameInputPreferenceData extends Data{

    /**
     * @type {GameInput[]}
     */
    inputs

    constructor() {
        super()
        this.inputs = []
    }

    /**
     * @param {string} name
     * @param {string} key
     * @param {DynamicAttribute} value
     * @return {GameInput}
     */
    addInput(name, key, value) {
        if (this.findByName(name)) {
            throw new ClientError(`Game Input "${name}" already created`)
        }
        return this.add(name, key, value)
    }

    /**
     * @param {string} name
     * @param {string} key
     * @param {DynamicAttribute} value
     * @return {GameInput}
     */
    tryAddInput(name, key, value) {
        if (!this.findByName(name)) {
            return this.add(name, key, value)
        }
    }

    /**
     * @private
     * @param {string} name
     * @param {string} key
     * @param {DynamicAttribute} value
     * @return {GameInput}
     */
    add(name, key, value){
        const gameInput = new GameInput(name, key, value)
        this.inputs.push(gameInput)
        return gameInput
    }

    /**
     * @param {number} id
     * @return {GameInput}
     */
    find(id) {
        return this.inputs.find(input => input.getId() === id)
    }

    /**
     * @param {string} name
     * @return {GameInput}
     */
    findByName(name) {
        return this.inputs.find(input => input.getName() === name)
    }

    /**
     * @param {GameInput} gameInput
     */
    delete(gameInput){
        const index = this.getInputs().findIndex((element) => element === gameInput)
        if(index >= 0){
            return this.getInputs().splice(index, 1)
        }else{
            throw new ClientError(`Game Input "${gameInput.getName()}" not found!`)
        }
    }

    /**
     * @param {GameInput[]} inputs
     */
    setInputs(inputs){
        this.inputs = inputs
    }

    /**
     * @return {GameInput[]}
     */
    getInputs(){
        return this.inputs
    }

    /**
     * @param {GameInput[]} inputs
     */
    concatInputs(inputs) {
        this.concat(
            this.inputs,
            inputs,
            (tItem, sItem) => tItem.getName() === sItem.getName()
        )
    }

}