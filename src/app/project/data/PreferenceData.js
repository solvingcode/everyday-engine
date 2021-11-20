import Data from './Data.js'

export default class PreferenceData extends Data{

    /**
     * @type {GameInputPreference}
     */
    gameInput

    /**
     * @type {MaskGroupPreference}
     */
    maskGroup

    /**
     * @type {LayerGroupPreference}
     */
    layerGroup

    /**
     * @type {TagPreference}
     */
    tag

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

    /**
     * @param {MaskGroupPreference} maskGroup
     */
    setMaskGroup(maskGroup){
        this.maskGroup = maskGroup
    }

    /**
     * @return {MaskGroupPreference}
     */
    getMaskGroup(){
        return this.maskGroup
    }

    /**
     * @param {LayerGroupPreference} layerGroup
     */
    setLayerGroup(layerGroup){
        this.layerGroup = layerGroup
    }

    /**
     * @return {LayerGroupPreference}
     */
    getLayerGroup(){
        return this.layerGroup
    }

    /**
     * @param {TagPreference} tag
     */
    setTag(tag){
        this.tag = tag
    }

    /**
     * @return {TagPreference}
     */
    getTag(){
        return this.tag
    }

}