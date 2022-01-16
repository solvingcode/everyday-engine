import TagData from '../../project/data/TagData.js'

export default class Tag extends TagData{

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