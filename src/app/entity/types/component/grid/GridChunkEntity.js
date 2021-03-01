import EntityMotion from '../../../EntityMotion.js'
import Size from '../../../../pobject/Size.js'

export default class GridChunkEntity extends EntityMotion {

    init(world) {
        this.size = this.props.size
        this.props.style.color = '#3e3e3e'
        return true
    }

    /**
     * @param {DataContext} dataContext
     */
    drawContext(dataContext) {
        const {context, scaleSize} = dataContext
        const chunkNbr = 10
        const chunkSize = new Size({
                width: scaleSize.width / chunkNbr,
                height: scaleSize.height / chunkNbr
            }
        )
        context.rect(0, 0, scaleSize.width, scaleSize.height)
        Array.from(Array(Math.pow(chunkNbr, 2)).keys()).forEach(iChunk => {
            context.rect(
                chunkSize.width * (iChunk % chunkNbr),
                chunkSize.height * Math.floor(iChunk / chunkNbr),
                chunkSize.width, chunkSize.height
            )
        })
    }

}