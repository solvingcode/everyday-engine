import Runner from '../Runner.js'
import World from '../../world/World.js'
import TileGridComponent from '../../component/internal/tile/TileGridComponent.js'
import Size from '../../pobject/Size.js'
import TransformHelper from '../../utils/TransformHelper.js'
import Vector from '../../utils/Vector.js'
import GUIGridComponent from '../../component/internal/gui/grid/GUIGridComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import GridUnitInstant from '../../unit/instant/type/internal/grid/GridUnitInstant.js'
import Window from '../../core/Window.js'
import Style from '../../pobject/Style.js'
import RectUnitInstant from '../../unit/instant/type/internal/primitive/RectUnitInstant.js'
import TileMapComponent from '../../component/internal/tile/TileMapComponent.js'
import AssetImage from '../../asset/types/image/AssetImage.js'
import {MouseButton} from '../../core/Mouse.js'
import StateManager from '../../state/StateManager.js'
import LayoutHelper from '../../utils/LayoutHelper.js'
import MeshComponent from '../../component/internal/MeshComponent.js'

export default class TileEditorRunner extends Runner {

    /**
     * @type {TileEditorRunner}
     */
    static instance = null

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * @override
     * @param {number} deltaTime
     */
    execute(deltaTime) {
        const world = World.get()
        const units = world.getUnitManager().findUnitsByComponents([TileGridComponent])
        const unit = units && units[0]
        if (unit) {
            const tileGridComponent = unit.getComponent(TileGridComponent)
            const cellScale = tileGridComponent.getCellScale()
            this.createGrid(cellScale)
            const selectedUnit = world.getUnitManager().getSelected()
            if (selectedUnit && selectedUnit.getComponent(TileMapComponent)) {
                this.selectCell(cellScale)
                this.editTileMap(cellScale)
            }
        }
    }

    /**
     * @param {Vector} cellScale
     */
    createGrid(cellScale) {
        const world = World.get()
        const camera = world.getCamera()
        const unitManager = world.getUnitManager()
        let chunkIds = []
        this.unitGridChildIds = (this.unitGridChildIds || [])
        const cellSize = new Size(TransformHelper.getSizeFromScale(cellScale))
        const cellSizeScaled = camera.toScaleSize(cellSize)
        const sizeChunkCells = this.getSizeChunkCells(cellScale)
        const chunkVectors = this.getChunkVectors(cellScale)
        chunkVectors.forEach(({x, y}) => {
            const positionChunk = new Vector({x, y})

            const unitGridExist = unitManager.getUnitsHasComponents([GUIGridComponent])
                .find(unit => {
                    const transformComponent = unit.getComponent(TransformComponent)
                    const guiGridComponent = unit.getComponent(GUIGridComponent)
                    return transformComponent.getPosition().equals(positionChunk) &&
                        transformComponent.getScale().equals(TransformHelper.getScaleFromSize(sizeChunkCells)) &&
                        guiGridComponent.getCellSizeScaled().equals(cellSizeScaled)
                })
            const unitGrid = unitGridExist || world.createChildUnitInstant(GridUnitInstant, null,
                positionChunk, sizeChunkCells, cellSize, cellSizeScaled)

            chunkIds.push(unitGrid.getId())
        })
        this.unitGridChildIds
            .filter(childId => !chunkIds.includes(childId))
            .forEach(childId => {
                unitManager.tryDeleteUnitById(childId)
            })
        this.unitGridChildIds = chunkIds
    }

    /**
     * @param {Vector} cellScale
     * @return {Size}
     */
    getSizeChunk(cellScale) {
        const {width: windowWidth, height: windowHeight} = Window.get().size
        const divideScreen = 3
        const cellSize = new Size(TransformHelper.getSizeFromScale(cellScale))
        return new Size({
            width: Math.ceil((windowWidth / divideScreen) / cellSize.width) * cellSize.width,
            height: Math.ceil((windowHeight / divideScreen) / cellSize.height) * cellSize.height
        })
    }

    /**
     * @param {Vector} cellScale
     * @return {Size}
     */
    getSizeChunkCells(cellScale) {
        const sizeChunk = this.getSizeChunk(cellScale)
        const world = World.get()
        const camera = world.getCamera()
        const cellSize = new Size(TransformHelper.getSizeFromScale(cellScale))
        const sizeChunkScaled = camera.fromScaleSize(sizeChunk)
        return new Size({
            width: Math.ceil(sizeChunkScaled.width / cellSize.width) * cellSize.width,
            height: Math.ceil(sizeChunkScaled.height / cellSize.height) * cellSize.height
        })
    }

    /**
     * @param {Vector} cellScale
     * @return {Vector[]}
     */
    getChunkVectors(cellScale) {
        const world = World.get()
        const camera = world.getCamera()
        const sizeChunkCells = this.getSizeChunkCells(cellScale)
        const sizeChunk = this.getSizeChunk(cellScale)
        const {width: windowWidth, height: windowHeight} = Window.get().size
        const chunkSizeNbrX = Math.ceil(windowWidth / sizeChunk.width) + 1
        const chunkSizeNbrY = Math.ceil(windowHeight / sizeChunk.height) + 1
        return Array.from(Array(chunkSizeNbrX * chunkSizeNbrY).keys())
            .map(iChunk => {
                const {width, height} = sizeChunkCells
                const x = Math.floor(camera.position.x / width) * width + width * (iChunk % chunkSizeNbrX)
                const y = Math.floor(camera.position.y / height) * height + height * Math.floor(iChunk / chunkSizeNbrX)
                return new Vector({x, y})
            })
    }

    /**
     * @param {StateManager} stateManager
     * @return {boolean}
     */
    isEdit(stateManager) {
        return stateManager.hasAnyState('DRAW_EDIT_TILE_MAP')
    }

    /**
     * @param {StateManager} stateManager
     * @return {boolean}
     */
    isEditArea(stateManager) {
        return stateManager.hasAnyState('DRAW_EDIT_AREA_TILE_MAP')
    }

    /**
     * @param {StateManager} stateManager
     * @return {boolean}
     */
    isDelete(stateManager) {
        return stateManager.hasAnyState('DRAW_DELETE_TILE_MAP')
    }

    /**
     * @param {Vector} cellScale
     */
    selectCell(cellScale) {
        const world = World.get()
        const camera = world.getCamera()
        const mouse = Window.get().mouse
        const selectedCellPosition = this.getSelectedCellPosition(cellScale, mouse.currentScenePosition)
        const stateManager = StateManager.get()
        if (!this.isEdit(stateManager) && !this.isDelete(stateManager) && !this.isEditArea(stateManager)) {
            if (this.selectedCell) {
                world.getUnitManager().tryDeleteUnitById(this.selectedCell.getId())
                this.selectedCell = null
            }
        } else if (selectedCellPosition) {
            if (this.selectedCell) {
                const transformComponent = this.selectedCell.getComponent(TransformComponent)
                if (
                    !transformComponent.getPosition().equals(selectedCellPosition) ||
                    !transformComponent.getScale().equals(cellScale)
                ) {
                    world.getUnitManager().tryDeleteUnitById(this.selectedCell.getId())
                    this.selectedCell = null
                }
            }
            if (!this.selectedCell) {
                const style = new Style()
                style.setBorderSize(camera.fromScaleNumber(2))
                style.setColor('#ffffff')
                this.selectedCell = world.createChildUnitInstant(RectUnitInstant, null,
                    selectedCellPosition, cellScale, style)

                const selectedAsset = world.getAssetsManager().getSelectedAsset()
                if (selectedAsset && selectedAsset.getType() instanceof AssetImage) {
                    this.selectedCell.getComponent(MeshComponent).setAssetId(selectedAsset.getId())
                }
            }
        }
    }

    /**
     * @param {Vector} cellScale
     * @param {Vector} mousePosition
     * @return {Vector|null}
     */
    getSelectedCellPosition(cellScale, mousePosition) {
        const cellSize = new Size(TransformHelper.getSizeFromScale(cellScale))
        const currentWorldMousePosition = World.get().getWorldScalePosition(mousePosition)
        const sizeChunkCells = this.getSizeChunkCells(cellScale)
        const chunkVectors = this.getChunkVectors(cellScale)
        const chunkSelected = chunkVectors.find(chunkVector => {
            const chunkVectorMax = Vector.add(chunkVector, new Vector({
                x: sizeChunkCells.width, y: sizeChunkCells.height
            }))
            return currentWorldMousePosition.getX() >= chunkVector.getX() &&
                currentWorldMousePosition.getX() <= chunkVectorMax.getX() &&
                currentWorldMousePosition.getY() >= chunkVector.getY() &&
                currentWorldMousePosition.getY() <= chunkVectorMax.getY()
        })
        if (chunkSelected) {
            const positionChunk = new Vector(chunkSelected)
            const numberCellsX = Math.ceil(sizeChunkCells.width / cellSize.width)
            const numberCellsY = Math.ceil(sizeChunkCells.height / cellSize.height)
            const distanceMouse = Vector.subtract(currentWorldMousePosition, positionChunk)
            const distanceMouseCellX = Math.floor(distanceMouse.getX() / cellSize.width)
            const distanceMouseCellY = Math.floor(distanceMouse.getY() / cellSize.height)
            if (distanceMouseCellX <= numberCellsX && distanceMouseCellY <= numberCellsY) {
                return Vector.add(positionChunk,
                    new Vector({x: distanceMouseCellX * cellSize.width, y: distanceMouseCellY * cellSize.height}))
            }
        }
        return null
    }

    /**
     * @param {Vector} cellScale
     */
    editTileMap(cellScale) {
        const world = World.get()
        const mouse = Window.get().mouse
        const stateManager = StateManager.get()
        const cellSize = new Size(TransformHelper.getSizeFromScale(cellScale))
        if (mouse.isButtonPressed(MouseButton.LEFT) &&
            LayoutHelper.isPositionValid(mouse)) {
            const selectedUnit = world.getUnitManager().getSelected()
            if (!stateManager.hasAnyState('ACTION_SET_TILE_MAP') && this.isEdit(stateManager)) {
                if (selectedUnit) {
                    const tileMapComponent = selectedUnit.getComponent(TileMapComponent)
                    if (tileMapComponent) {
                        const selectedCellPosition = this.getSelectedCellPosition(cellScale, mouse.currentScenePosition)
                        const selectedAsset = world.getAssetsManager().getSelectedAsset()
                        if (selectedAsset && selectedAsset.getType() instanceof AssetImage) {
                            const cellIndex = new Vector({
                                x: selectedCellPosition.getX() / cellSize.getWidth(),
                                y: selectedCellPosition.getY() / cellSize.getHeight()
                            })
                            const assetId = selectedAsset.getId()
                            stateManager.startState('ACTION_SET_TILE_MAP', 1, {cellIndex, assetId})
                        }
                    }
                }
            } else if (!stateManager.hasAnyState('ACTION_DELETE_TILE_MAP') && this.isDelete(stateManager)) {
                if (selectedUnit) {
                    const tileMapComponent = selectedUnit.getComponent(TileMapComponent)
                    if (tileMapComponent) {
                        const selectedCellPosition = this.getSelectedCellPosition(cellScale, mouse.currentScenePosition)
                        const cellIndex = new Vector({
                            x: selectedCellPosition.getX() / cellSize.getWidth(),
                            y: selectedCellPosition.getY() / cellSize.getHeight()
                        })
                        stateManager.startState('ACTION_DELETE_TILE_MAP', 1, {cellIndex})
                    }
                }
            } else if (!stateManager.hasAnyState('ACTION_SET_AREA_TILE_MAP')) {
                if (selectedUnit) {
                    const tileMapComponent = selectedUnit.getComponent(TileMapComponent)
                    if (tileMapComponent) {
                        const selectedAsset = world.getAssetsManager().getSelectedAsset()
                        if (selectedAsset && selectedAsset.getType() instanceof AssetImage) {
                            if (this.isEditArea(stateManager) && !this.startCellPosition) {
                                this.startCellPosition = this.getSelectedCellPosition(cellScale, mouse.scenePosition)
                            }
                        }
                    }
                }
            }
        }else if(mouse.isButtonClicked(MouseButton.LEFT) && this.isEditArea(stateManager) && this.startCellPosition){
            const endCellPosition = this.getSelectedCellPosition(cellScale, mouse.currentScenePosition)
            const startCellIndex = new Vector({
                x: this.startCellPosition.getX() / cellSize.getWidth(),
                y: this.startCellPosition.getY() / cellSize.getHeight()
            })
            const endCellIndex = new Vector({
                x: endCellPosition.getX() / cellSize.getWidth(),
                y: endCellPosition.getY() / cellSize.getHeight()
            })
            const selectedAsset = world.getAssetsManager().getSelectedAsset()
            if (selectedAsset && selectedAsset.getType() instanceof AssetImage) {
                const assetId = selectedAsset.getId()
                stateManager.startState('ACTION_SET_AREA_TILE_MAP', 1, {
                    startCellIndex,
                    endCellIndex,
                    assetId
                })
                this.startCellPosition = null
            }
        }
    }
}
