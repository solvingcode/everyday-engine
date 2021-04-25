import AConstant from '../flow/constant/AConstant.js'
import ACondition from '../flow/condition/ACondition.js'
import AEvent from '../flow/event/AEvent.js'
import AFunction from '../flow/function/AFunction.js'
import World from '../world/World.js'
import AUnit from '../flow/unit/AUnit.js'

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
            return `Constant = ${nodeSource.getName()}`
        }else if(nodeSource instanceof ACondition){
            return `Condition = ${nodeSource.getName()}`
        }else if(nodeSource instanceof AEvent){
            return `Event = ${nodeSource.getName()}`
        }else if(nodeSource instanceof AUnit){
            const unit = World.get().findUnitById(parseInt(nodeSource.getName()))
            return `Unit = ${unit.getName()}`
        }else if(nodeSource instanceof AFunction){
            return `Function = ${nodeSource.getName()}`
        }else{
            throw new TypeError(`Node source "${nodeSource && nodeSource.constructor.name}" unknown`)
        }
    }
}