/**
 * @abstract
 */
import TypeShapeGenerator from '../TypeShapeGenerator.js'
import Size from '../../../pobject/Size.js'

export default class GridShapeGenerator extends TypeShapeGenerator{

    /**
     * @override
     */
    draw(meshComponent, transformComponent, dataContext){
        const {context, scaleSize} = dataContext
        const sizeScaleRate = scaleSize.width / meshComponent.getSize().getWidth()
        const chunkEachSize = 40 * sizeScaleRate
        const chunkNbrX = Math.ceil(scaleSize.width / chunkEachSize)
        const chunkNbrY = Math.ceil(scaleSize.height / chunkEachSize)
        const chunkSize = new Size({
                width: chunkEachSize,
                height: chunkEachSize
            }
        )
        context.rect(0, 0, scaleSize.width, scaleSize.height)
        Array.from(Array(chunkNbrX * chunkNbrY).keys()).forEach(iChunk => {
            context.rect(
                chunkSize.width * (iChunk % chunkNbrX),
                chunkSize.height * Math.floor(iChunk / chunkNbrX),
                chunkSize.width, chunkSize.height
            )
        })
    }

}