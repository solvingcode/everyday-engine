import LayerGroupPreferenceData from '../../project/data/LayerGroupPreferenceData.js'

export default class LayerGroupPreference extends LayerGroupPreferenceData {

    init() {
        this.tryAddLayer('Default')
    }

    /**
     * @param {LayerGroup} layerGroup
     * @return {boolean}
     */
    hasLayerGroup(layerGroup){
        return !!this.getLayers().find(layer => layer === layerGroup)
    }

    /**
     * @return {LayerGroup}
     */
    getSelected(){
        return this.getLayers().find(layer => layer.isSelected())
    }

}