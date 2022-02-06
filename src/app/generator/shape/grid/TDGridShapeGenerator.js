import GUIGridComponent from '../../../component/internal/gui/grid/GUIGridComponent.js'
import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'

export default class TDGridShapeGenerator extends ContextTypeShapeGenerator{

    /**
     * @override
     */
    draw(unit, dataContext){
        const guiGridComponent = unit.getComponent(GUIGridComponent)
        const {context, scaleSize, camera} = dataContext
        const cellSize = guiGridComponent.getCellSize()
        const cellSizeScaled = camera.toScaleSize(cellSize)
        const chunkNbrX = Math.ceil(scaleSize.width / cellSizeScaled.width)
        const chunkNbrY = Math.ceil(scaleSize.height / cellSizeScaled.height)
        context.rect(0, 0, scaleSize.width, scaleSize.height)
        Array.from(Array(chunkNbrX * chunkNbrY).keys()).forEach(iChunk => {
            context.rect(
                cellSizeScaled.width * (iChunk % chunkNbrX),
                cellSizeScaled.height * Math.floor(iChunk / chunkNbrX),
                cellSizeScaled.width, cellSizeScaled.height
            )
        })
    }

}