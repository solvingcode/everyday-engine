import UnitData from '../project/data/UnitData.js'
import GUIPropertyComponent from '../component/gui/property/GUIPropertyComponent.js'

export default class Unit extends UnitData{

    constructor(defaultComponentClasses) {
        super()
        this.init(defaultComponentClasses || [])
    }

    /**
     * @param {Class<ComponentData>[]} defaultComponentClasses
     */
    init(defaultComponentClasses){
        defaultComponentClasses.forEach(componentClass =>
            this.createComponent(componentClass)
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

export const PrimitiveShape = {
    RECT: 'rect',
    CIRCLE: 'circle',
    ARROW_RIGHT: 'arrow_right',
    ARROW_DOWN: 'arrow_down',
    ARROW_RECT_RIGHT: 'arrow_rect_right',
    ARROW_RECT_DOWN: 'arrow_rect_down'
}