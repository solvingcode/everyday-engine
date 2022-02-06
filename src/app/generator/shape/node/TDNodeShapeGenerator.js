import NodeComponent from '../../../component/internal/gui/node/NodeComponent.js'
import NodeHelper from '../../../utils/NodeHelper.js'
import Color from '../../../utils/Color.js'
import {CANVAS_CONTEXT_TYPE} from '../../../core/Constant.js'
import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'

export default class TDNodeShapeGenerator extends ContextTypeShapeGenerator {

    /**
     * @override
     * @TODO: need some refactoring
     */
    draw(unit, dataContext) {
        const nodeComponent = unit.getComponent(NodeComponent)
        const title = nodeComponent.getTitle()
        const type = nodeComponent.getType()
        const inputs = nodeComponent.getInputs()
        const outputs = nodeComponent.getOutputs()
        const inputConnections = nodeComponent.getInputConnections()
        const outputConnections = nodeComponent.getOutputConnections()
        const inputColors = nodeComponent.getInputColors()
        const isOutputConnected = nodeComponent.getOutputConnected()
        const isBaseInputConnected = nodeComponent.getBaseInputConnected()
        const isBaseOutputConnected = nodeComponent.getBaseOutputConnected()
        const nodeBaseInputColor = nodeComponent.getBaseInputColor()
        const hasBaseInput = nodeComponent.getBaseInput()
        const hasBaseOutput = nodeComponent.getBaseOutput()
        const output = nodeComponent.getOutput()
        const {context, scaleSize, camera} = dataContext
        const {width, height} = scaleSize

        //props
        const {
            sizeInput, fontSize, heightHead,
            shadowBlur, boxColor, baseInputColor,
            fontColor, headColor, padding,
            colorFocused, selectColor, fontSizeRatio
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
        if (hasBaseInput) {
            const {position: baseInputPosition} = NodeHelper.getNodeGUIInput(type, -1)
            const baseInputPositionScale = camera.toCameraScale(baseInputPosition)
            context.fillStyle = (nodeBaseInputColor && Color.shadeColor(nodeBaseInputColor, 100)) || baseInputColor
            context.strokeStyle = baseInputColor
            context.lineWidth = camera.toScaleNumber(1)
            context.beginPath()
            context.moveTo(baseInputPositionScale.getX(), baseInputPositionScale.getY())
            context.lineTo(baseInputPositionScale.getX() + sizeInputScale, baseInputPositionScale.getY() + sizeInputScale / 2)
            context.lineTo(baseInputPositionScale.getX(), baseInputPositionScale.getY() + sizeInputScale)
            context.closePath()
            if (isBaseInputConnected) {
                context.fill()
            } else {
                context.stroke()
            }
        }

        //other inputs
        inputs.forEach((input, index) => {
            const {position: inputPosition} = NodeHelper.getNodeGUIInput(type, index - (hasBaseInput ? 0 : 1))
            const inputPositionScale = camera.toCameraScale(inputPosition)
            const inputColor = inputColors[index] || headColor
            context.fillStyle = Color.shadeColor(inputColor, 100)
            context.strokeStyle = inputColor
            context.lineWidth = camera.toScaleNumber(1)
            if (inputConnections[index]) {
                context.fillRect(inputPositionScale.getX(), inputPositionScale.getY(), sizeInputScale, sizeInputScale)
            } else {
                context.strokeRect(inputPositionScale.getX(), inputPositionScale.getY(), sizeInputScale, sizeInputScale)
            }
            context.fillStyle = fontColor
            context.fillText(input,
                inputPositionScale.getX() + sizeInputScale + paddingScale,
                inputPositionScale.getY() + sizeInputScale)
        })

        //result output
        if (output) {
            const {
                position: outputPosition
            } = NodeHelper.getNodeGUIOutput(type, camera.fromScaleSize(scaleSize),
                1 - (!hasBaseOutput ? 1 : 0))
            const outputPositionScale = camera.toCameraScale(outputPosition)
            context.fillStyle = Color.shadeColor(headColor, 100)
            context.strokeStyle = headColor
            context.lineWidth = camera.toScaleNumber(1)
            if (isOutputConnected) {
                context.fillRect(outputPositionScale.getX(), outputPositionScale.getY(), sizeInputScale, sizeInputScale)
            } else {
                context.strokeRect(outputPositionScale.getX(), outputPositionScale.getY(), sizeInputScale, sizeInputScale)
            }
        }

        //custom outputs
        const widthOutput = camera.toScaleNumber(Math.max(...outputs.map(customOutput => customOutput.length * fontSize / fontSizeRatio)))
        outputs.forEach((customOutput, index) => {
            const {position: outputPosition} = NodeHelper.getNodeGUIOutput(type, camera.fromScaleSize(scaleSize),
                index + 1 - (!hasBaseOutput ? 1 : 0))
            const outputPositionScale = camera.toCameraScale(outputPosition)
            const outputColor = headColor
            context.fillStyle = Color.shadeColor(outputColor, 100)
            context.strokeStyle = outputColor
            context.lineWidth = camera.toScaleNumber(1)
            if (outputConnections[index]) {
                context.fillRect(outputPositionScale.getX(), outputPositionScale.getY(), sizeInputScale, sizeInputScale)
            } else {
                context.strokeRect(outputPositionScale.getX(), outputPositionScale.getY(), sizeInputScale, sizeInputScale)
            }
            const textCanvas = new OffscreenCanvas(widthOutput, sizeInputScale)
            const textContext = textCanvas.getContext(CANVAS_CONTEXT_TYPE)
            textContext.font = `${fontSizeScale}px Arial`
            textContext.fillStyle = fontColor
            textContext.textAlign = 'right'
            textContext.fillText(customOutput, widthOutput - paddingScale, sizeInputScale)
            context.drawImage(textCanvas,
                outputPositionScale.getX() - sizeInputScale + paddingScale - widthOutput,
                outputPositionScale.getY())
        })

        //base output
        if (hasBaseOutput) {
            const {position: baseOutputPosition} = NodeHelper.getNodeGUIOutput(type, camera.fromScaleSize(scaleSize), 0)
            const baseOutputPositionScale = camera.toCameraScale(baseOutputPosition)
            context.fillStyle = baseInputColor
            context.strokeStyle = baseInputColor
            context.lineWidth = camera.toScaleNumber(1)
            context.beginPath()
            context.moveTo(baseOutputPositionScale.getX(), baseOutputPositionScale.getY())
            context.lineTo(baseOutputPositionScale.getX() + sizeInputScale, baseOutputPositionScale.getY() + sizeInputScale / 2)
            context.lineTo(baseOutputPositionScale.getX(), baseOutputPositionScale.getY() + sizeInputScale)
            context.closePath()
            if (isBaseOutputConnected) {
                context.fill()
            } else {
                context.stroke()
            }
        }

    }

}