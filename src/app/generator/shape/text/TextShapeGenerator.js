import TypeShapeGenerator from '../TypeShapeGenerator.js'
import ClientError from '../../../exception/type/ClientError.js'
import TextComponent from '../../../component/internal/TextComponent.js'

/**
 * @abstract
 */
export default class TextShapeGenerator extends TypeShapeGenerator {

    /**
     * @override
     */
    draw(unit, dataContext) {
        const {context, scaleSize, camera, world} = dataContext
        const assetManager = world.getAssetsManager()
        const textComponent = unit.findComponentByClass(TextComponent)
        const textAlign = textComponent.getTextAlign()
        const verticalAlign = textComponent.getVerticalAlign()
        const textStyle = textComponent.getTextStyle()
        const fontFamilyAsset = textComponent.getFontFamily() && assetManager.findAssetFontById(textComponent.getFontFamily())
        const fontFamily = (fontFamilyAsset && fontFamilyAsset.getName()) || 'Arial'
        const {width, height} = scaleSize
        const text = unit.getText()
        const fontSize = unit.getFontSize()
        const fontSizeScale = camera.toScaleNumber(fontSize)
        let xPos = 0
        let yPos = height / 2
        const fontProps = [...(textStyle || []), `${fontSizeScale}px`, fontFamily]

        if(textAlign){
            switch (textAlign){
                case 'left':
                    context.textAlign = 'left'
                    break
                case 'center':
                    context.textAlign = 'center'
                    xPos = width / 2
                    break
                case 'right':
                    context.textAlign = 'right'
                    xPos = width
                    break
                default:
                    throw new ClientError(`${this.constructor.name}: Text Alignment "${textAlign}" not supported`)
            }
        }

        if(verticalAlign){
            switch (verticalAlign){
                case 'top':
                    context.textBaseline = 'bottom'
                    break
                case 'middle':
                    context.textBaseline = 'middle'
                    break
                case 'bottom':
                    context.textBaseline = 'top'
                    break
                default:
                    throw new ClientError(`${this.constructor.name}: Vertical Alignment "${verticalAlign}" not supported`)
            }
        }

        context.font = fontProps.join(' ')
        context.fillText(text, xPos, yPos)
    }

}