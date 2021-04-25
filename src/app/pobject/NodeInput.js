import NodeInputData from '../project/data/NodeInputData.js'

export default class NodeInput extends NodeInputData{

    /**
     * @type {boolean}
     */
    selected

    /**
     * @param {boolean} selected
     */
    setSelected(selected){
        this.selected = selected
    }

    /**
     * @return {boolean}
     */
    getSelected(){
        return this.selected
    }

    select(){
        this.setSelected(true)
    }

    unselect(){
        this.setSelected(false)
    }

    /**
     * @return {boolean}
     */
    isSelected(){
        return this.getSelected()
    }

}