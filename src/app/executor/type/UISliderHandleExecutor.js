import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import UISliderComponent from '../../component/internal/ui/slider/UISliderComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import Vector from '../../utils/Vector.js'
import UISliderHandleComponent from '../../component/internal/ui/slider/UISliderHandleComponent.js'
import {MouseButton} from '../../core/Mouse.js'
import UnitHelper from '../../utils/UnitHelper.js'
import Window from '../../core/Window.js'
import TransformHelper from '../../utils/TransformHelper.js'

export default class UISliderHandleExecutor extends ComponentExecutor {

    constructor() {
        super([UISliderHandleComponent, TransformComponent, MeshComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const {mouse} = Window.get()
        const mousePosition = mouse.currentPosition
        const world = World.get()
        const unitManager = world.getUnitManager()
        const transformComponent = unit.getComponent(TransformComponent)
        const position = transformComponent.getPosition()
        const scale = transformComponent.getScale()
        const parentUnit = unitManager.findParentUnit(unit)
        const parentTransformComponent = parentUnit.getComponent(TransformComponent)
        const parentPosition = parentTransformComponent.getPosition()
        const parentScale = parentTransformComponent.getScale()
        const uiSliderComponent = parentUnit.getComponent(UISliderComponent)
        const isPressedUnit = UnitHelper.isInsideWindowPosition(world, unit, mousePosition)
        if(uiSliderComponent){
            const minValue = uiSliderComponent.getMinValue()
            const maxValue = uiSliderComponent.getMaxValue()
            if (mouse.isButtonPressed(MouseButton.LEFT) && isPressedUnit) {
                const mousePositionWorld = world.getWorldPosition(mousePosition)
                const slideValue = Vector.subtract(mousePositionWorld, parentPosition).x / TransformHelper.getSizeFromScale(parentScale).getWidth()
                const slidePositionX = mousePositionWorld.getX() < parentPosition.getX()
                    ? parentPosition.getX()
                    : mousePositionWorld.getX() > parentPosition.getX() + TransformHelper.getSizeFromScale(parentScale).getWidth()
                        ? parentPosition.getX() + TransformHelper.getSizeFromScale(parentScale).getWidth()
                        : mousePositionWorld.getX()
                const newPosition = new Vector({x: slidePositionX - TransformHelper.getSizeFromScale(scale).getWidth() / 2, y: position.getY()})
                if(!_.isEqual(newPosition, position)){
                    transformComponent.setPosition(newPosition)
                    uiSliderComponent.setCurrentValue(minValue + slideValue * (maxValue - minValue))
                }
            }
        }
    }

}