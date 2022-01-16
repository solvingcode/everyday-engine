import NodeInputData from '../project/data/NodeInputData.js'

export default class NodeInput extends NodeInputData{

    /**
     * @type {boolean}
     */
    selected

    /**
     * @type {boolean}
     */
    initialized

    /**
     * @type {Unit}
     */
    graphUnit

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

    /**
     * @return {Unit}
     */
    getGraphUnit(){
        return this.graphUnit
    }

    /**
     * @param {Unit} graphUnit
     */
    setGraphUnit(graphUnit){
        this.graphUnit = graphUnit
    }

    /**
     * @return {boolean}
     */
    isInitialized(){
        return this.initialized
    }

    /**
     * @param {boolean} initialized
     */
    setInitialized(initialized){
        this.initialized = initialized
    }

}