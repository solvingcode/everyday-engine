import AFlow from '../flow/AFlow.js'
import FlowParser from '../parser/flow/FlowParser.js'

export default class FlowManager {

    /**
     * @type {AFlow[]}
     */
    flows

    constructor() {
        this.flows = []
    }

    /**
     * @return {AFlow[]}
     */
    getFlows(){
        return this.flows
    }

    /**
     * @param {string} name
     */
    findByName(name){
        return this.getFlows().find(flow => flow.getName() === name)
    }

    /**
     * @param {string} name
     * @param {Function} type
     * @return {AFlow}
     */
    create(name, type){
        if(type.prototype instanceof AFlow){
            const flow = new type(name)
            this.tryAdd(flow)
            return flow
        }
        throw new TypeError(`Flow must be of type AFlow!`)
    }

    /**
     * @param {AFlow} flow
     */
    tryAdd(flow) {
        const existFlow = this.findByName(flow.getName())
        if(existFlow){
            throw new TypeError(`Flow with name "${flow.getName()}" already exist!`)
        }
        this.flows.push(flow)
    }

    /**
     * @param {AFlow} flow
     */
    add(flow) {
        const indexFlow = this.flows.findIndex(pFlow => pFlow.getName() === flow.getName())
        if(indexFlow >= 0){
            this.flows[indexFlow] = flow
        }else{
            this.flows.push(flow)
        }
    }

    /**
     * @param {XMLDocument} data
     * @return {boolean}
     */
    load(data){
        const flow = FlowParser.parse(data)
        if(flow){
            this.add(flow)
            return true
        }
        return false
    }
}