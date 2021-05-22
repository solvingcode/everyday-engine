import Data from './Data.js'

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