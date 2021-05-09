import AConstant from '../flow/constant/AConstant.js'
import ACondition from '../flow/condition/ACondition.js'
import AEvent from '../flow/event/AEvent.js'
import AFunction from '../flow/function/AFunction.js'
import World from '../world/World.js'
import AUnit from '../flow/unit/AUnit.js'
import {NODE_TYPES} from '../flow/node/ANode.js'
import ClientError from '../exception/type/ClientError.js'
import Size from '../pobject/Size.js'
import Vector from './Vector.js'

export default class NodeHelper {

    /**
     * @param {ANode} node
     * @return {AFunction}
     */
    static getSourceNode(node){
        const functionRegistry = World.get().getFunctionRegistry()
        return functionRegistry.getInstanceById(node.getSourceId())
    }

    /**
     * @param {ANode} node
     * @return {string}
     */
    static getNodeName(node){
        const nodeSource = this.getSourceNode(node)
        if(nodeSource instanceof AConstant){
            return `${nodeSource.getName()}`
        }else if(nodeSource instanceof ACondition){
            return `${nodeSource.getName()}`
        }else if(nodeSource instanceof AEvent){
            return `${nodeSource.getName()}`
        }else if(nodeSource instanceof AUnit){
            const unit = World.get().findUnitById(parseInt(nodeSource.getName()))
            return `${unit.getName()}`
        }else if(nodeSource instanceof AFunction){
            return `${nodeSource.getName()}`
        }else{
            throw new ClientError(`Node source "${nodeSource && nodeSource.constructor.name}" unknown`)
        }
    }

    /**
     * @param {ANode} node
     * @return {string}
     */
    static getNodeType(node){
        const nodeSource = this.getSourceNode(node)
        if(nodeSource instanceof AConstant){
            return NODE_TYPES.CONSTANT
        }else if(nodeSource instanceof ACondition){
            return NODE_TYPES.CONDITION
        }else if(nodeSource instanceof AEvent){
            return NODE_TYPES.EVENT
        }else if(nodeSource instanceof AUnit){
            return NODE_TYPES.UNIT
        }else if(nodeSource instanceof AFunction){
            return NODE_TYPES.FUNCTION
        }else{
            throw new ClientError(`Node source "${nodeSource && nodeSource.constructor.name}" unknown`)
        }
    }

    /**
     * @param {string} type
     * @return {{
     * shadowBlur: number, colorFocused: string,
     * heightHead: number, boxColor: string,
     * sizeInput: number, fontSize: number,
     * baseInputColor: string, headColor: string,
     * padding: number, fontColor: string,
     * fontSizeRatio: number
     * }}
     */
    static getNodeGUIProps(type){
        const sizeInput = 10
        const fontSize = 12
        const fontSizeRatio = 1.5
        const padding = 10
        const heightHead = fontSize + padding * 2
        const shadowBlur = 10
        const boxColor = '#0f1013'
        const baseInputColor = '#ffffff'
        const colorFocused = '#555555'
        const fontColor = '#ffffff'
        let headColor
        if (type === NODE_TYPES.FUNCTION) {
            headColor = '#2c3f66'
        } else if (type === NODE_TYPES.EVENT) {
            headColor = '#5e2222'
        } else if (type === NODE_TYPES.CONSTANT) {
            headColor = '#343030'
        } else if (type === NODE_TYPES.CONDITION) {
            headColor = '#225e31'
        } else if (type === NODE_TYPES.UNIT) {
            headColor = '#5e2254'
        }
        return {
            sizeInput,
            fontSize,
            heightHead,
            shadowBlur,
            boxColor,
            baseInputColor,
            colorFocused,
            fontColor,
            padding,
            headColor,
            fontSizeRatio
        }
    }

    /**
     * @param {ANode} node
     * @return {Size}
     */
    static getNodeGUISize(node){
        const nodeSource = this.getSourceNode(node)
        const nodeSourceInputs = nodeSource.getInputs()
        const type = this.getNodeType(node)
        const {fontSize, padding, fontSizeRatio, sizeInput} = this.getNodeGUIProps(type)
        const width = Math.max(node.getName().length * fontSize / fontSizeRatio, 100)
        const height = (nodeSourceInputs.length + 1) * (sizeInput + padding * 2) + (fontSize + padding * 2)
        return new Size({width, height})
    }

    /**
     * @param {string} type
     * @param {Size} size
     * @return {{position: Vector}}
     */
    static getNodeGUIOutput(type, size){
        const {sizeInput, padding, heightHead} = this.getNodeGUIProps(type)
        const position = new Vector({x: size.getWidth() - padding - sizeInput, y: heightHead + padding})
        return {position}
    }

    /**
     * @param {string} type
     * @param {number} index
     * @return {{position: Vector}}
     */
    static getNodeGUIInput(type, index){
        const {sizeInput, padding, heightHead} = this.getNodeGUIProps(type)
        const position = new Vector({
            x: padding,
            y: heightHead + sizeInput + (padding + sizeInput) * (index + 1)
        })
        return {position}
    }
}