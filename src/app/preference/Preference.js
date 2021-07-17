import PreferenceData from '../project/data/PreferenceData.js'
import GameInputPreference from './gameInput/GameInputPreference.js'
import MaskGroupPreference from './maskgroup/MaskGroupPreference.js'

export default class Preference extends PreferenceData{

    constructor() {
        super()
        this.gameInput = new GameInputPreference()
        this.maskGroup = new MaskGroupPreference()
    }

    init(){
        this.getGameInput().init()
        this.getMaskGroup().init()
    }

}