import ANode from './ANode.js'
import EventRegistry from '../event/EventRegistry.js'

export default class EventNode extends ANode{

    /**
     * @param {string} functionName
     */
    constructor(functionName) {
        super(EventRegistry.get().getInstance(functionName))
    }

}