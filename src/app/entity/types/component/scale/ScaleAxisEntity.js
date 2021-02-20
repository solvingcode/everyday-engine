import ScaleEntity from './ScaleEntity.js'

export default class ScaleAxisEntity extends ScaleEntity{

    /**
     * @override
     */
    drawContext(dataContext) {
        const {context, camera} = dataContext
        context.beginPath()
        this.drawLine(context, camera)
        this.drawScaleRect(context, camera)
    }

    /**
     * @return {{headSize: number}}
     */
    getArrowProps(){
        return {
            headSize: 10
        }
    }

    /**
     * @param {OffscreenCanvasRenderingContext2D} context
     * @param {Camera} camera
     */
    drawLine(context, camera){
        const scaleVertices = this.getScaleVertices(camera)
        context.moveTo(scaleVertices[0].x, scaleVertices[0].y)
        context.lineTo(scaleVertices[1].x, scaleVertices[1].y)
    }

    /**
     * @abstract
     * @param {OffscreenCanvasRenderingContext2D} context
     * @param {Camera} camera
     */
    drawScaleRect(context, camera){
        throw new TypeError('ScaleAxisEntity.drawRect must be implemented')
    }

}