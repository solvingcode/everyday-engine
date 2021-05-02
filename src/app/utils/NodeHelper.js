import AConstant from '../flow/constant/AConstant.js'
import ACondition from '../flow/condition/ACondition.js'
import AEvent from '../flow/event/AEvent.js'
import AFunction from '../flow/function/AFunction.js'
import World from '../world/World.js'
import AUnit from '../flow/unit/AUnit.js'
import {NODE_TYPES} from '../flow/node/ANode.js'
import ClientError from '../exception/type/ClientError.js'

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
}