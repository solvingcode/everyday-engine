import TileMapComponent from '../component/internal/tile/TileMapComponent.js'

export default class TileMapHelper {

    /**
     * @param {Unit} tileMap
     * @param {Vector} cellIndex
     * @param {number} assetId
     */
    static set(tileMap, cellIndex, assetId) {
        const tileMapComponent = tileMap.getComponent(TileMapComponent)
        const cellIndexes = tileMapComponent.getCellIndexes()
        const assetIds = tileMapComponent.getAssetIds()
        const iCellIndexExist = cellIndexes.findIndex(index => index.equals(cellIndex))
        if (iCellIndexExist >= 0) {
            assetIds[iCellIndexExist] = assetId
        } else {
            cellIndexes[cellIndexes.length] = cellIndex
            assetIds[cellIndexes.length] = assetId
        }
    }

}