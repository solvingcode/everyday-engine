import ContentData from '../project/data/ContentData.js'
import SystemError from '../exception/type/SystemError.js'

export default class Content extends ContentData{

    /**
     * @return {*}
     */
    getData(){
        throw new SystemError(`${this.constructor.name}.getData must be implemented`)
    }

}