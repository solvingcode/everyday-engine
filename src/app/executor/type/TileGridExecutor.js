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
    }

    /**
     * @param {Vector} cellScale
     */
    createGrid(cellScale) {
        const world = World.get()
        const camera = world.getCamera()
        const mouse = Window.get().mouse
        const {width: windowWidth, height: windowHeight} = Window.get().size
        const unitManager = world.getUnitManager()
        let chunkIds = []
        this.unitGridChildIds = (this.unitGridChildIds || [])
        const cellSize = new Size(TransformHelper.getSizeFromScale(cellScale))
        const cellSizeScaled = camera.toScaleSize(cellSize)
        const divideScreen = 3
        const sizeChunk = new Size({
            width: Math.ceil((windowWidth / divideScreen) / cellSize.width) * cellSize.width,
            height: Math.ceil((windowHeight / divideScreen) / cellSize.height) * cellSize.height
        })
        const sizeChunkScaled = camera.fromScaleSize(sizeChunk)
        const sizeChunkCells = new Size({
            width: Math.ceil(sizeChunkScaled.width / cellSize.width) * cellSize.width,
            height: Math.ceil(sizeChunkScaled.height / cellSize.height) * cellSize.height
        })
        const chunkSizeNbrX = Math.ceil(windowWidth / sizeChunk.width) + 1
        const chunkSizeNbrY = Math.ceil(windowHeight / sizeChunk.height) + 1
        const chunkVectors = Array.from(Array(chunkSizeNbrX * chunkSizeNbrY).keys())
            .map(iChunk => {
                const {width, height} = sizeChunkCells
                const x = Math.floor(camera.position.x / width) * width + width * (iChunk % chunkSizeNbrX)
                const y = Math.floor(camera.position.y / height) * height + height * Math.floor(iChunk / chunkSizeNbrX)
                return new Vector({x, y})
            })
        chunkVectors.forEach(({x, y}) => {
            const positionChunk = new Vector({x, y})
            let cellSelectedX = -1
            let cellSelectedY = -1
            const numberCellsX = Math.ceil(sizeChunkCells.width / cellSize.width)
            const numberCellsY = Math.ceil(sizeChunkCells.height / cellSize.height)
            const currentWorldMousePosition = world.getWorldPosition(mouse.currentScenePosition)
            const distanceMouse = Vector.subtract(currentWorldMousePosition, positionChunk)
            const distanceMouseCellX = Math.floor(distanceMouse.getX() / cellSize.width)
            const distanceMouseCellY = Math.floor(distanceMouse.getY() / cellSize.height)
            if(distanceMouseCellX < numberCellsX && distanceMouseCellY < numberCellsY){
                cellSelectedX = distanceMouseCellX
                cellSelectedY = distanceMouseCellY
            }

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
}