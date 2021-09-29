import MaskGroupData from '../../project/data/MaskGroupData.js'

export default class MaskGroup extends MaskGroupData{
    /**
     * @type {boolean}
     */
    selected

    /**
     * @return {boolean}
     */
    isSelected(){
        return this.selected
    }

    /**
     * @param {boolean} selected
     */
    setSelected(selected){
        this.selected = selected
    }

    unselect(){
        this.setSelected(false)
    }

    select(){
        this.setSelected(true)
    }
}