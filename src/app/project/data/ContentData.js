import Data from './Data.js'
import Maths from '../../utils/Maths.js'

export default class ContentData extends Data{

    /**
     * @type {number}
     */
    id

    /**
     * @type {number}
     */
    dataContentId

    /**
     * @param {number} dataContentId
     */
    constructor(dataContentId) {
        super()
        this.id = Maths.generateId()
        this.dataContentId = dataContentId
    }

    /**
     * @return {number}
     */
    getId(){
        return this.id
    }

    /**
     * @param {number} id
     */
    setId(id){
        this.id = id
    }

    /**
     * @return {number}
     */
    getDataContentId(){
        return this.dataContentId
    }

    /**
     * @param {number} dataContentId
     */
    setDataContentId(dataContentId){
        this.dataContentId = dataContentId
    }

}