import UnitData from '../project/data/UnitData.js'
import GUIPropertyComponent from '../component/GUIPropertyComponent.js'

export default class Unit extends UnitData{

    constructor(defaultComponentClasses) {
        super()
        this.init(defaultComponentClasses || [])
    }

    /**
     * @param {Component[]} defaultComponentClasses
     */
    init(defaultComponentClasses){
        defaultComponentClasses.forEach(componentClass =>
            this.addComponent(new componentClass())
        )
    }

    /**
     * @return {boolean}
     */
    isSelected(){
        return this.getComponent(GUIPropertyComponent).isSelected()
    }

    select(){
        this.getComponent(GUIPropertyComponent).setSelected(true)
    }

    unselect(){
        this.getComponent(GUIPropertyComponent).setSelected(false)
    }

    focus(){
        this.getComponent(GUIPropertyComponent).setFocused(true)
    }

    unfocus(){
        this.getComponent(GUIPropertyComponent).setFocused(false)
    }

}