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
     * @param {World} world
     * @param {Unit} unit
     */
    static updateMeshes(world, unit) {
        const unitManager = world.getUnitManager()
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

                transformComponent.setScale(tileMapScale)
                transformComponent.setPosition(tileMapPosition)
                meshComponent.setMapAssetPositions(tileMapAssetPositions)
                meshComponent.setMapAssetIds(mapAssetIds)
                meshComponent.setMapAssetSize(cellSize)
                meshComponent.setGenerated(false)
            }
        }
    }

}