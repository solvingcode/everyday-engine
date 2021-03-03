import Size from '../../../../pobject/Size.js'
import ComponentEntity from '../ComponentEntity.js'

export default class GridChunkEntity extends ComponentEntity {

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
        const chunkNbr = 20
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