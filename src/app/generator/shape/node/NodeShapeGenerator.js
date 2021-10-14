import TypeShapeGenerator from '../TypeShapeGenerator.js'
import NodeComponent from '../../../component/internal/gui/node/NodeComponent.js'
import NodeHelper from '../../../utils/NodeHelper.js'

/**
 * @abstract
 */
export default class NodeShapeGenerator extends TypeShapeGenerator {

    /**
     * @override
     * @TODO: need some refactoring
     */
    draw(unit, dataContext) {
        const nodeComponent = unit.getComponent(NodeComponent)
        const title = nodeComponent.getTitle()
        const type = nodeComponent.getType()
        const inputs = nodeComponent.getInputs()
        const output = nodeComponent.getOutput()
        const {context, scaleSize, camera} = dataContext
        const {width, height} = scaleSize

        //props
        const {
            sizeInput, fontSize, heightHead,
            shadowBlur, boxColor, baseInputColor,
            fontColor, headColor, padding,
            colorFocused, selectColor
        } = NodeHelper.getNodeGUIProps(type)

        //convert props to camera scale
        const heightHeadScale = camera.toScaleNumber(heightHead)
        const fontSizeScale = camera.toScaleNumber(fontSize)
        const paddingScale = camera.toScaleNumber(padding)
        const sizeInputScale = camera.toScaleNumber(sizeInput)
        const borderSize = camera.toScaleNumber(3)

        // box
        let shadowColor = headColor
        if (unit.isSelected()) {
            shadowColor = selectColor
        } else if (unit.isFocused()) {
            shadowColor = colorFocused
        }
        context.shadowColor = shadowColor
        context.shadowBlur = shadowBlur
        context.fillStyle = boxColor
        context.lineWidth = borderSize
        context.strokeStyle = unit.isSelected() ? selectColor : headColor
        context.rect(0, 0, width, height)
        context.fill()
        context.stroke()
        context.shadowColor = null
        context.shadowBlur = 0

        //box header
        context.fillStyle = headColor
        context.fillRect(borderSize / 2, borderSize / 2, width - borderSize, heightHeadScale - borderSize)

        //box header title
        context.font = `${fontSizeScale}px Arial`
        context.fillStyle = fontColor
        context.fillText(title, paddingScale, fontSizeScale + paddingScale)

        //base input
        if (NodeHelper.hasBaseInput(type)) {
            const {position: baseInputPosition} = NodeHelper.getNodeGUIInput(type, -1)
            const baseInputPositionScale = camera.toCameraScale(baseInputPosition)
            context.fillStyle = baseInputColor
            context.beginPath()
            context.moveTo(baseInputPositionScale.getX(), baseInputPositionScale.getY())
            context.lineTo(baseInputPositionScale.getX() + sizeInputScale, baseInputPositionScale.getY() + sizeInputScale / 2)
            context.lineTo(baseInputPositionScale.getX(), baseInputPositionScale.getY() + sizeInputScale)
            context.fill()
        }

        //other inputs
        inputs.forEach((input, index) => {
            const {position: inputPosition} = NodeHelper.getNodeGUIInput(type, index)
            const inputPositionScale = camera.toCameraScale(inputPosition)
            context.fillStyle = headColor
            context.fillRect(inputPositionScale.getX(), inputPositionScale.getY(), sizeInputScale, sizeInputScale)
            context.fillStyle = fontColor
            context.fillText(input,
                inputPositionScale.getX() + sizeInputScale + paddingScale,
                inputPositionScale.getY() + sizeInputScale)
        })

        //output
        if (output) {
            const {position: outputPosition, outputColor} = NodeHelper.getNodeGUIOutput(type, camera.fromScaleSize(scaleSize), 1)
            const outputPositionScale = camera.toCameraScale(outputPosition)
            context.fillStyle = outputColor
            context.fillRect(outputPositionScale.getX(), outputPositionScale.getY(), sizeInputScale, sizeInputScale)
        }

        //base output
        const {position: baseOutputPosition} = NodeHelper.getNodeGUIOutput(type, camera.fromScaleSize(scaleSize), 0)
        const baseOutputPositionScale = camera.toCameraScale(baseOutputPosition)
        context.fillStyle = baseInputColor
        context.beginPath()
        context.moveTo(baseOutputPositionScale.getX(), baseOutputPositionScale.getY())
        context.lineTo(baseOutputPositionScale.getX() + sizeInputScale, baseOutputPositionScale.getY() + sizeInputScale / 2)
        context.lineTo(baseOutputPositionScale.getX(), baseOutputPositionScale.getY() + sizeInputScale)
        context.fill()

    }

}