import TypeShapeGenerator from '../TypeShapeGenerator.js'
import UITextComponent from '../../../component/internal/ui/UITextComponent.js'
import ClientError from '../../../exception/type/ClientError.js'

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
        const uiTextComponent = unit.getComponent(UITextComponent)
        const textAlign = uiTextComponent.getTextAlign()
        const verticalAlign = uiTextComponent.getVerticalAlign()
        const fontFamilyAsset = uiTextComponent.getFontFamily() && assetManager.findAssetFontById(uiTextComponent.getFontFamily())
        const fontFamily = (fontFamilyAsset && fontFamilyAsset.getName()) || 'Arial'
        const {width, height} = scaleSize
        const text = unit.getText()
        const fontSize = unit.getFontSize()
        const fontSizeScale = camera.toScaleNumber(fontSize)
        let xPos = 0
        let yPos = height / 2

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

        context.font = `${fontSizeScale}px ${fontFamily}`
        context.fillText(text, xPos, yPos)
    }

}