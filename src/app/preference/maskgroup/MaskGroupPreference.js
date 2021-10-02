import MaskGroupPreferenceData from '../../project/data/MaskGroupPreferenceData.js'

export default class MaskGroupPreference extends MaskGroupPreferenceData {

    init() {
        this.tryAddMask('Default')
    }

    /**
     * @return {MaskGroup}
     */
    getSelected(){
        return this.getMasks().find(mask => mask.isSelected())
    }

}