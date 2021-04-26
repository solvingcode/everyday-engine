import TypeShapeGenerator from '../TypeShapeGenerator.js'
import NodeComponent from '../../../component/internal/gui/node/NodeComponent.js'
import {NODE_TYPES} from '../../../flow/node/ANode.js'
import GUIPropertyComponent from '../../../component/internal/gui/property/GUIPropertyComponent.js'

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
        const {context, scaleSize} = dataContext
        const {width, height} = scaleSize

        //props
        const sizeInput = 10
        const fontSize = 12
        const padding = 10
        const boxColor = '#0f1013'
        const baseInputColor = '#ffffff'
        const colorFocused = '#555555'
        const fontColor = '#ffffff'
        const heightHead = fontSize + padding * 2
        let headColor
        if (type === NODE_TYPES.FUNCTION) {
            headColor = '#2c3f66'
        } else if (type === NODE_TYPES.EVENT) {
            headColor = '#5e2222'
        } else if (type === NODE_TYPES.CONSTANT) {
            headColor = '#343030'
        }

        // box
        context.shadowColor = guiPropertyComponent.isFocused() ? colorFocused : headColor
        context.shadowBlur = 10
        context.fillStyle = boxColor
        context.strokeStyle = headColor
        context.rect(0, 0, width, height)
        context.fill()
        context.stroke()
        context.shadowColor = null
        context.shadowBlur = 0

        //box header
        context.fillStyle = headColor
        context.fillRect(0, 0, width, heightHead)

        //box header title
        context.font = `${fontSize}px Arial`
        context.fillStyle = fontColor
        context.fillText(title, padding, fontSize + padding)

        //base input
        if(type !== NODE_TYPES.EVENT){
            context.fillStyle = baseInputColor
            context.fillRect(padding, heightHead + padding, sizeInput, sizeInput)
        }

        //other inputs
        inputs.forEach((input, index) => {
            const inputX = padding
            const inputY = heightHead + sizeInput + (padding + sizeInput) * (index + 1)
            context.fillStyle = headColor
            context.fillRect(inputX, inputY, sizeInput, sizeInput)
            context.fillStyle = fontColor
            context.fillText(input, inputX + sizeInput + padding, inputY + sizeInput)
        })

        //output
        if(output || type === NODE_TYPES.EVENT){
            const outputX = width - padding - sizeInput
            const outputY = heightHead + padding
            context.fillStyle = baseInputColor
            context.fillRect(outputX, outputY, sizeInput, sizeInput)
        }

    }

}