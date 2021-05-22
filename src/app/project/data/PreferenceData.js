import Data from './Data.js'

export default class PreferenceData extends Data{

    /**
     * @type {GameInputPreference}
     */
    gameInput

    /**
     * @param {GameInputPreference} gameInput
     */
    setGameInput(gameInput){
        this.gameInput = gameInput
    }

    /**
     * @return {GameInputPreference}
     */
    getGameInput(){
        return this.gameInput
    }

}