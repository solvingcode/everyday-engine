/**
 * @abstract
 */
export default class AFlow {

    /**
     * @type {ANode[]}
     */
    nodes

    /**
     * @type {string}
     */
    name

    /**
     * @type {string}
     */
    status

    /**
     * @param {string} name
     */
    constructor(name) {
        this.name = name
        this.nodes = []
        this.status = STATUS.NEW
    }

    /**
     * @param {string} name
     */
    setName(name){
        this.name = name
    }

    /**
     * @return {string}
     */
    getName(){
        return this.name
    }

    /**
     * @param {string} status
     */
    setStatus(status){
        this.status = status
    }

    /**
     * @return {string}
     */
    getStatus(){
        return this.status
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

    /**
     * @return {ANode[]}
     */
    getNodes(){
        return this.nodes
    }

    /**
     * @return {boolean}
     */
    compile(){
        if(this.doCompile()){
            this.setStatus(STATUS.COMPILED)
        }else{
            this.setStatus(STATUS.ERROR)
        }
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

export const STATUS = {
    NEW: '',
    COMPILED: 'compiled',
    ERROR: 'error'
}