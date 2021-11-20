import PreferenceData from '../project/data/PreferenceData.js'
import GameInputPreference from './gameInput/GameInputPreference.js'
import MaskGroupPreference from './maskgroup/MaskGroupPreference.js'
import TagPreference from './tag/TagPreference.js'
import LayerGroupPreference from './layerGroup/LayerGroupPreference.js'

export default class Preference extends PreferenceData{

    constructor() {
        super()
        this.gameInput = new GameInputPreference()
        this.maskGroup = new MaskGroupPreference()
        this.layerGroup = new LayerGroupPreference()
        this.tag = new TagPreference()
    }

    init(){
        this.getGameInput().init()
        this.getMaskGroup().init()
        this.getTag().init()
    }

}