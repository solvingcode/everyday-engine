export default class NodeInput{
    /**
     * @type {number}
     */
    sourceNodeId
    /**
     * @type {number}
     */
    targetId

    /**
     * @return {number}
     */
    getSourceNodeId(){
        return this.sourceNodeId
    }

    /**
     * @param {number} sourceNodeId
     */
    setSourceNodeId(sourceNodeId){
        this.sourceNodeId = sourceNodeId
    }

    /**
     * @return {number}
     */
    getTargetId(){
        return this.targetId
    }

    /**
     * @param {number} targetId
     */
    setTargetId(targetId){
        this.targetId = targetId
    }
}