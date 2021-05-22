import TypeShapeGenerator from '../TypeShapeGenerator.js'
import NodeComponent from '../../../component/internal/gui/node/NodeComponent.js'
import GUIPropertyComponent from '../../../component/internal/gui/property/GUIPropertyComponent.js'
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
        const guiPropertyComponent = unit.getComponent(GUIPropertyComponent)
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
            colorFocused, fontColor, headColor,
            padding, selectColor
        } = NodeHelper.getNodeGUIProps(type)

        //convert props to camera scale
        const heightHeadScale = camera.toScaleNumber(heightHead)
        const fontSizeScale = camera.toScaleNumber(fontSize)
        const paddingScale = camera.toScaleNumber(padding)
        const sizeInputScale = camera.toScaleNumber(sizeInput)

        // box
        let shadowColor = headColor
        if (guiPropertyComponent.isSelected()) {
            shadowColor = selectColor
        } else if (guiPropertyComponent.isFocused()) {
            shadowColor = colorFocused
        }
        context.shadowColor = shadowColor
        context.shadowBlur = shadowBlur
        context.fillStyle = boxColor
        context.strokeStyle = guiPropertyComponent.isSelected() ? selectColor : headColor
        context.rect(0, 0, width, height)
        context.fill()
        context.stroke()
        context.shadowColor = null
        context.shadowBlur = 0

        //box header
        context.fillStyle = headColor
        context.fillRect(0, 0, width, heightHeadScale)

        //box header title
        context.font = `${fontSizeScale}px Arial`
        context.fillStyle = fontColor
        context.fillText(title, paddingScale, fontSizeScale + paddingScale)

        //base input
        if (NodeHelper.hasBaseInput(type)) {
            const {position: baseInputPosition} = NodeHelper.getNodeGUIInput(type, -1)
            const baseInputPositionScale = camera.toCameraScale(baseInputPosition)
            context.fillStyle = baseInputColor
            context.fillRect(baseInputPositionScale.getX(), baseInputPositionScale.getY(), sizeInputScale, sizeInputScale)
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
        if (output || NodeHelper.hasBaseOutput(type)) {
            const {position: outputPosition} = NodeHelper.getNodeGUIOutput(type, camera.fromScaleSize(scaleSize))
            const outputPositionScale = camera.toCameraScale(outputPosition)
            context.fillStyle = baseInputColor
            context.fillRect(outputPositionScale.getX(), outputPositionScale.getY(), sizeInputScale, sizeInputScale)
        }

    }

}