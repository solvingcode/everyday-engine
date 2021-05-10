import TypeShapeGenerator from '../TypeShapeGenerator.js'
import NodeComponent from '../../../component/internal/gui/node/NodeComponent.js'
import {NODE_TYPES} from '../../../flow/node/ANode.js'
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
        const {context, scaleSize} = dataContext
        const {width, height} = scaleSize

        //props
        const {
            sizeInput, fontSize, heightHead,
            shadowBlur, boxColor, baseInputColor,
            colorFocused, fontColor, headColor,
            padding, selectColor
        } = NodeHelper.getNodeGUIProps(type)

        // box
        let shadowColor = headColor
        if(guiPropertyComponent.isFocused()){
            shadowColor = colorFocused
        }else if(guiPropertyComponent.isSelected()){
            shadowColor = selectColor
        }
        context.shadowColor = shadowColor
        context.shadowBlur = shadowBlur
        context.fillStyle = boxColor
        context.strokeStyle = guiPropertyComponent.isSelected() ? selectColor: headColor
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
        if(type === NODE_TYPES.FUNCTION || type === NODE_TYPES.CONDITION){
            const {position: baseInputPosition} = NodeHelper.getNodeGUIInput(type, -1)
            context.fillStyle = baseInputColor
            context.fillRect(baseInputPosition.getX(), baseInputPosition.getY(), sizeInput, sizeInput)
        }

        //other inputs
        inputs.forEach((input, index) => {
            const {position: inputPosition} = NodeHelper.getNodeGUIInput(type, index)
            context.fillStyle = headColor
            context.fillRect(inputPosition.getX(), inputPosition.getY(), sizeInput, sizeInput)
            context.fillStyle = fontColor
            context.fillText(input, inputPosition.getX() + sizeInput + padding, inputPosition.getY() + sizeInput)
        })

        //output
        if(output || type === NODE_TYPES.EVENT){
            const {position: outputPosition} = NodeHelper.getNodeGUIOutput(type, scaleSize)
            context.fillStyle = baseInputColor
            context.fillRect(outputPosition.getX(), outputPosition.getY(), sizeInput, sizeInput)
        }

    }

}