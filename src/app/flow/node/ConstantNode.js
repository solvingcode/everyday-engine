import ANode from './ANode.js'

export default class ConstantNode extends ANode{

    /**
     * @param {string|number|boolean} value
     */
    constructor(value) {
        super(value)
    }

}