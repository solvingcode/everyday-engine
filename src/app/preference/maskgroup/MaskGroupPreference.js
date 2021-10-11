import MaskGroupPreferenceData from '../../project/data/MaskGroupPreferenceData.js'

export default class MaskGroupPreference extends MaskGroupPreferenceData {

    init() {
        this.tryAddMask('Default')
    }

    /**
     * @param {MaskGroup} maskGroup
     * @return {boolean}
     */
    hasMaskGroup(maskGroup){
        return !!this.getMasks().find(mask => mask === maskGroup)
    }

    /**
     * @return {MaskGroup}
     */
    getSelected(){
        return this.getMasks().find(mask => mask.isSelected())
    }

}