import TileMapComponent from '../component/internal/tile/TileMapComponent.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import TileGridComponent from '../component/internal/tile/TileGridComponent.js'
import Vector from './Vector.js'
import ArrayHelper from './ArrayHelper.js'
import Vertex from './Vertex.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import TransformHelper from './TransformHelper.js'
import Size from '../pobject/Size.js'
import ClientError from '../exception/type/ClientError.js'
import TileColliderComponent from '../component/internal/tile/TileColliderComponent.js'
import RectColliderComponent from '../component/internal/RectColliderComponent.js'

export default class TileMapHelper {

    /**
     * @param {Unit} tileMap
     * @param {Vector} cellIndex
     * @param {number} assetId
     */
    static set(tileMap, cellIndex, assetId) {
        const tileMapComponent = tileMap.getComponent(TileMapComponent)
        if (tileMapComponent) {
            const cellIndexes = tileMapComponent.getCellIndexes()
            const assetIds = tileMapComponent.getAssetIds()
            const iCellIndexExist = cellIndexes.findIndex(index => index.equals(cellIndex))
            if (iCellIndexExist >= 0) {
                assetIds[iCellIndexExist] = assetId
            } else {
                const nextIndex = cellIndexes.length
                cellIndexes[nextIndex] = cellIndex
                assetIds[nextIndex] = assetId
            }
        } else {
            throw new ClientError(`Selected unit is not a Tile Map`)
        }
    }

    /**
     * @param {Unit} tileMap
     * @param {Vector} cellIndex
     */
    static delete(tileMap, cellIndex) {
        const tileMapComponent = tileMap.getComponent(TileMapComponent)
        if (tileMapComponent) {
            const cellIndexes = tileMapComponent.getCellIndexes()
            const assetIds = tileMapComponent.getAssetIds()
            const iCellIndexExist = cellIndexes.findIndex(index => index.equals(cellIndex))
            if (iCellIndexExist >= 0) {
                cellIndexes.splice(iCellIndexExist, 1)
                assetIds.splice(iCellIndexExist, 1)
            }
        } else {
            throw new ClientError(`Selected unit is not a Tile Map`)
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     */
    static updateMeshes(world, unit) {
        const unitManager = world.getUnitManager()
        const parentUnit = unitManager.findParentUnit(unit)
        const tileMapComponent = unit.getComponent(TileMapComponent)
        const meshComponent = unit.getComponent(MeshComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        const tileGrid = unitManager.findParentUnit(unit)
        const tileGridComponent = tileGrid && tileGrid.getComponent(TileGridComponent)
        if (tileGridComponent) {
            const cellIndexes = tileMapComponent.getCellIndexes()
            const assetIds = tileMapComponent.getAssetIds()
            const cellScale = tileGridComponent.getCellScale()
            const cellSize = new Size(TransformHelper.getSizeFromScale(cellScale))
            const mapAssetPositions = []
            const mapAssetIds = []
            cellIndexes.forEach((cellIndex, iCellIndex) => {
                mapAssetPositions[iCellIndex] = Vector.linearMultiply(cellIndex,
                    new Vector({x: cellSize.width, y: cellSize.height}))
                mapAssetIds[iCellIndex] = assetIds[iCellIndex]
            })
            const rectContainer = Vertex.getRectContainer(mapAssetPositions)
            const tileMapPosition = rectContainer ? rectContainer.position : transformComponent.getPosition()
            const tileMapAssetPositions = mapAssetPositions.map(mapAssetPosition => Vector.subtract(mapAssetPosition, tileMapPosition))
            const tileMapScale = rectContainer
                ? TransformHelper.getScaleFromSize(rectContainer.size.add(cellSize))
                : transformComponent.getScale()

            if (!ArrayHelper.isEqual(meshComponent.getMapAssetPositions(), tileMapAssetPositions) ||
                !ArrayHelper.isEqual(meshComponent.getMapAssetIds(), mapAssetIds) ||
                !transformComponent.getPosition().equals(tileMapPosition) ||
                !transformComponent.getScale().equals(tileMapScale) ||
                !meshComponent.getMapAssetSize().equals(cellSize)) {

                transformComponent.setLocalScale(TransformHelper.getLocalScale(tileMapScale, parentUnit))
                transformComponent.setLocalPosition(TransformHelper.getLocalPosition(tileMapPosition, parentUnit))
                meshComponent.setMapAssetPositions(tileMapAssetPositions)
                meshComponent.setMapAssetIds(mapAssetIds)
                meshComponent.setMapAssetSize(cellSize)
                meshComponent.setGenerated(false)
            }
        }
    }


    /**
     * @param {World} world
     * @param {Unit} unit
     */
    static updateColliders(world, unit) {
        const unitManager = world.getUnitManager()
        const meshComponent = unit.getComponent(MeshComponent)
        const tileColliderComponent = unit.getComponent(TileColliderComponent)
        const actualColliderComponents = unit.findComponentsByClass(RectColliderComponent)
        const tileGrid = unitManager.findParentUnit(unit)
        const tileGridComponent = tileGrid && tileGrid.getComponent(TileGridComponent)
        if (tileColliderComponent && tileGridComponent) {
            const cellScale = tileGridComponent.getCellScale()
            const cellSize = new Size(TransformHelper.getSizeFromScale(cellScale))
            const mapAssetPositions = meshComponent.getMapAssetPositions()
            const cellSizePercent = new Size({
                width: cellSize.width / meshComponent.getSize().width * 100,
                height: cellSize.height / meshComponent.getSize().height * 100
            })
            if (!ArrayHelper.isEqual(mapAssetPositions, tileColliderComponent.getColliderPositions()) ||
                !tileColliderComponent.getColliderSize().equals(cellSizePercent)
            ) {
                tileColliderComponent.setColliderPositions(_.cloneDeep(mapAssetPositions))
                tileColliderComponent.setColliderSize(cellSizePercent)
            }
            actualColliderComponents.forEach(actualColliderComponent => {
                if(!mapAssetPositions.find(mapAssetPosition =>
                    mapAssetPosition.equals(actualColliderComponent.getPosition()))){
                    unit.deleteComponent(actualColliderComponent.getId())
                }
            })
            mapAssetPositions.forEach(mapAssetPosition => {
                if(!actualColliderComponents.find(actualColliderComponent =>
                    actualColliderComponent.getPosition().equals(mapAssetPosition))){
                    const colliderComponent = unit.createComponent(RectColliderComponent)
                    colliderComponent.setPosition(_.cloneDeep(mapAssetPosition))
                    colliderComponent.setSize(cellSizePercent)
                    colliderComponent.setHidden(true)
                }
            })
        }
    }

}