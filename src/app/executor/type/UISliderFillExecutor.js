import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import UISliderFillComponent from '../../component/internal/ui/slider/UISliderFillComponent.js'
import UISliderComponent from '../../component/internal/ui/slider/UISliderComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import Vector from '../../utils/Vector.js'

export default class UISliderFillExecutor extends ComponentExecutor {

    constructor() {
        super([UISliderFillComponent, TransformComponent, MeshComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const unitManager = world.getUnitManager()
        const transformComponent = unit.getComponent(TransformComponent)
        const localScale = transformComponent.getLocalScale()
        const meshComponent = unit.getComponent(MeshComponent)
        const parentUnit = unitManager.findParentUnit(unit)
        const uiSliderComponent = parentUnit.getComponent(UISliderComponent)
        if(uiSliderComponent){
            const currentValue = uiSliderComponent.getCurrentValue()
            const minValue = uiSliderComponent.getMinValue()
            const maxValue = uiSliderComponent.getMaxValue()
            const slideValue = currentValue / (maxValue - minValue)
            const newLocalScale = new Vector({x: slideValue, y: 1})
            if(!_.isEqual(localScale, newLocalScale) && meshComponent.isGenerated()){
                transformComponent.setLocalScale(newLocalScale)
                transformComponent.setScale(new Vector())
                meshComponent.setGenerated(false)
            }
        }
    }

}