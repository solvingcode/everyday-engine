import ComponentExecutor from './ComponentExecutor.js'
import TileGridComponent from '../../component/internal/TileGridComponent.js'
import World from '../../world/World.js'
import Window from '../../core/Window.js'
import Vector from '../../utils/Vector.js'
import Size from '../../pobject/Size.js'
import GUIGridComponent from '../../component/internal/gui/grid/GUIGridComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import GridUnitInstant from '../../unit/instant/type/internal/grid/GridUnitInstant.js'
import TransformHelper from '../../utils/TransformHelper.js'
import RectUnitInstant from '../../unit/instant/type/internal/primitive/RectUnitInstant.js'
import Style from '../../pobject/Style.js'

export default class TileGridExecutor extends ComponentExecutor {

    constructor() {
        super([TileGridComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const tileGridComponent = unit.getComponent(TileGridComponent)
        const cellScale = tileGridComponent.getCellScale()
        this.createGrid(cellScale)
        this.selectCell(cellScale)
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
     * @param {Vector} cellScale
     */
    selectCell(cellScale) {
        const world = World.get()
        const camera = world.getCamera()
        const mouse = Window.get().mouse
        const currentWorldMousePosition = world.getWorldScalePosition(mouse.currentScenePosition)
        const sizeChunkCells = this.getSizeChunkCells(cellScale)
        const chunkVectors = this.getChunkVectors(cellScale)
        const cellSize = new Size(TransformHelper.getSizeFromScale(cellScale))
        const chunkSelected = chunkVectors.find(chunkVector => {
            const chunkVectorMax = Vector.add(chunkVector, new Vector({
                x: sizeChunkCells.width, y: sizeChunkCells.height
            }))
            return currentWorldMousePosition.getX() >= chunkVector.getX() &&
                currentWorldMousePosition.getX() <= chunkVectorMax.getX() &&
                currentWorldMousePosition.getY() >= chunkVector.getY() &&
                currentWorldMousePosition.getY() <= chunkVectorMax.getY()
        })
        if(chunkSelected){
            const positionChunk = new Vector(chunkSelected)
            const numberCellsX = Math.ceil(sizeChunkCells.width / cellSize.width)
            const numberCellsY = Math.ceil(sizeChunkCells.height / cellSize.height)
            const distanceMouse = Vector.subtract(currentWorldMousePosition, positionChunk)
            const distanceMouseCellX = Math.floor(distanceMouse.getX() / cellSize.width)
            const distanceMouseCellY = Math.floor(distanceMouse.getY() / cellSize.height)
            if (distanceMouseCellX <= numberCellsX && distanceMouseCellY <= numberCellsY) {
                const selectedCellPosition = Vector.add(positionChunk,
                    new Vector({x: distanceMouseCellX * cellSize.width, y: distanceMouseCellY * cellSize.height}))
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
                        selectedCellPosition, cellSize, style)
                }
            }
        }
    }
}