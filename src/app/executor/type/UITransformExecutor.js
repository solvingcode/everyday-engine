import ComponentExecutor from './ComponentExecutor.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import UITransformComponent from '../../component/internal/ui/UITransformComponent.js'
import UnitHelper from '../../utils/UnitHelper.js'
import World from '../../world/World.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import GeometryHelper from '../../utils/GeometryHelper.js'
import Vector from '../../utils/Vector.js'
import TransformHelper from '../../utils/TransformHelper.js'
import Size from '../../pobject/Size.js'

export default class UITransformExecutor extends ComponentExecutor {

    constructor() {
        super([UITransformComponent, TransformComponent, MeshComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        this.updateAnchor(world, unit)
        this.updatePosition(world, unit)
    }

    /**
     * @return {{indexLeftTop: number, indexRightBottom: number}}
     */
    getIndexes(){
        return {
            indexLeftTop: 0,
            indexRightBottom: 2
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     */
    updateAnchor(world, unit){
        const {indexLeftTop, indexRightBottom} = this.getIndexes()
        const uiTransformComponent = unit.getComponent(UITransformComponent)
        const anchorMin = uiTransformComponent.getAnchorMin()
        const anchorMax = uiTransformComponent.getAnchorMax()
        if(uiTransformComponent.isAnchorMinUpdated() || uiTransformComponent.isAnchorMaxUpdated()){
            const actualAnchorLeftTop = uiTransformComponent.getAnchorLeftTop()
            const actualAnchorRightBottom = uiTransformComponent.getAnchorRightBottom()
            const anchorAbsPositions = UnitHelper.getAnchors(world, unit)
            const size = unit.getComponent(MeshComponent).getSize()
            const position = unit.getComponent(TransformComponent).getPosition()
            const vertices = GeometryHelper.loadVertices(size).map(vertex => Vector.add(vertex, position))
            const anchorLeftTop = Vector.subtract(anchorAbsPositions[indexLeftTop], vertices[indexLeftTop])
            const anchorRightBottom = Vector.subtract(anchorAbsPositions[indexRightBottom], vertices[indexRightBottom])
            if(!_.isEqual(actualAnchorLeftTop, anchorLeftTop)){
                uiTransformComponent.setAnchorLeftTop(anchorLeftTop)
            }
            if(!_.isEqual(actualAnchorRightBottom, anchorRightBottom)){
                uiTransformComponent.setAnchorRightBottom(anchorRightBottom)
            }
            uiTransformComponent.setLastAnchorMin(anchorMin)
            uiTransformComponent.setLastAnchorMax(anchorMax)
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     */
    updatePosition(world, unit){
        const unitManager = world.getUnitManager()
        const parentUnit = unitManager.findParentUnit(unit)
        if(parentUnit && parentUnit.getComponent(UITransformComponent)){
            const {indexLeftTop, indexRightBottom} = this.getIndexes()
            const uiTransformComponent = unit.getComponent(UITransformComponent)
            const transformComponent = unit.getComponent(TransformComponent)
            const anchorLeftTop = uiTransformComponent.getAnchorLeftTop()
            const anchorRightBottom = uiTransformComponent.getAnchorRightBottom()
            const position = transformComponent.getPosition()
            const scale = transformComponent.getScale()
            const anchorAbsPositions = UnitHelper.getAnchors(world, unit)
            const positionLeftTop = Vector.subtract(anchorAbsPositions[indexLeftTop], anchorLeftTop)
            const positionRightBottom = Vector.subtract(anchorAbsPositions[indexRightBottom], anchorRightBottom)

            const newPosition = positionLeftTop
            const sizeAsPosition = Vector.subtract(positionRightBottom, positionLeftTop)
            const newScale = TransformHelper.getScaleFromSize(new Size({
                width: sizeAsPosition.getX(),
                height: sizeAsPosition.getY()
            }))

            if(!_.isEqual(position, newPosition)){
                transformComponent.setPosition(newPosition)
            }
            if(!_.isEqual(scale, newScale)){
                transformComponent.setScale(newScale)
            }
        }
    }

}