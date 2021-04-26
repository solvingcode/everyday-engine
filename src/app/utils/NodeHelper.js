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
            return `${nodeSource.getName()} [Constant]`
        }else if(nodeSource instanceof ACondition){
            return `${nodeSource.getName()} [Condition]`
        }else if(nodeSource instanceof AEvent){
            return `${nodeSource.getName()} [Event]`
        }else if(nodeSource instanceof AUnit){
            const unit = World.get().findUnitById(parseInt(nodeSource.getName()))
            return `${unit.getName()} [Unit]`
        }else if(nodeSource instanceof AFunction){
            return `${nodeSource.getName()} [Function]`
        }else{
            throw new TypeError(`Node source "${nodeSource && nodeSource.constructor.name}" unknown`)
        }
    }
}