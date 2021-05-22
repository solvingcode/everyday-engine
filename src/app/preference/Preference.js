import PreferenceData from '../project/data/PreferenceData.js'
import GameInputPreference from './gameInput/GameInputPreference.js'

export default class Preference extends PreferenceData{

    constructor() {
        super()
        this.gameInput = new GameInputPreference()
    }

    init(){
        this.getGameInput().init()
    }

}