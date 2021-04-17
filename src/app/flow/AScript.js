import AScriptData, {STATUS} from '../project/data/AScriptData.js'
import FunctionNode from './node/FunctionNode.js'
import ConstantNode from './node/ConstantNode.js'
import AConstant from './constant/AConstant.js'
import DynamicAttributeHelper from '../utils/DynamicAttributeHelper.js'
import EventNode from './node/EventNode.js'

/**
 * @abstract
 */
export default class AScript extends AScriptData{

    /**
     * @param {Registry} registry
     * @param {Function} nodeClass
     * @param {string|number|boolean} value
     */
    createNode(registry, nodeClass, value){
        let nodeSource
        switch(nodeClass){
            case FunctionNode:
            case EventNode:
                nodeSource = registry.tryGetInstance(value)
                break
            case ConstantNode:
                nodeSource = new AConstant(DynamicAttributeHelper.findTypeOfValue(value), value)
                registry.register(nodeSource)
                break
            default:
                throw new TypeError(`Script Create Node: "${nodeClass.name}" not supported`)
        }
        const node = new nodeClass(nodeSource.getId())
        this.addNode(node)
        return node
    }

    /**
     * @param {ANode} node
     */
    addNode(node) {
        this.nodes.push(node)
    }

    /**
     * @param {number} id
     */
    removeNodeById(id){
        const nodeIndex = this.nodes.findIndex(node => node.getId() === id)
        this.nodes.splice(nodeIndex, 1)
    }

    /**
     * @param {number} id
     */
    findNodeById(id){
        return this.nodes.find(node => node.getId() === id)
    }

    compile(){
        if(this.doCompile()){
            this.setStatus(STATUS.COMPILED)
        }else{
            this.setStatus(STATUS.ERROR)
        }
    }

    reset(){
        this.setStatus(STATUS.NEW)
    }

    /**
     * @abstract
     * @private
     * @return {boolean}
     */
    doCompile(){
        throw new TypeError(`${this.constructor.name}.doCompile must be implemented`)
    }

}