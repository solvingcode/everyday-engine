import Compiler from './compiler/Compiler.js'

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

    constructor() {
        this.nodes = []
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
     * @return {ANode[]}
     */
    getNodes(){
        return this.nodes
    }

    compile(){
        return Compiler.get().run(this)
    }

}