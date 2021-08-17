import TypeShapeGenerator from '../TypeShapeGenerator.js'

/**
 * @abstract
 */
export default class TextShapeGenerator extends TypeShapeGenerator {

    /**
     * @override
     */
    draw(unit, dataContext) {
        const {context, scaleSize, camera} = dataContext
        const {height} = scaleSize
        const text = unit.getText()
        const fontSize = unit.getFontSize()
        const fontSizeScale = camera.toScaleNumber(fontSize)

        context.font = `${fontSizeScale}px Arial`
        context.fillText(text, 0, height / 2)
    }

}