import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'
import GUIGridComponent from '../../../component/internal/gui/grid/GUIGridComponent.js'
import TransformHelper from '../../../utils/TransformHelper.js'

export default class WGGridShapeGenerator extends ContextTypeShapeGenerator {

    draw(unit, dataContext) {
        const guiGridComponent = unit.getComponent(GUIGridComponent)
        const {buffers, scale} = dataContext
        const cellScale = TransformHelper.getScaleFromSize(guiGridComponent.getCellSize())
        const chunkNbrX = Math.ceil(scale.getX() / cellScale.getX())
        const chunkNbrY = Math.ceil(scale.getY() / cellScale.getY())
        const positions = []
        for (let iChunkY = 0; iChunkY < chunkNbrY; iChunkY++) {
            for (let iChunkX = 0; iChunkX < chunkNbrX; iChunkX++) {
                positions.push(...[iChunkX * (1 / chunkNbrX), iChunkY * (1 / chunkNbrY)])
                positions.push(...[(iChunkX + 1) * (1 / chunkNbrX), iChunkY * (1 / chunkNbrY)])
                positions.push(...[iChunkX * (1 / chunkNbrX), iChunkY * (1 / chunkNbrY)])
                positions.push(...[iChunkX * (1 / chunkNbrX), (iChunkY + 1) * (1 / chunkNbrY)])
            }
        }
        buffers.position.vertices = positions
    }

}