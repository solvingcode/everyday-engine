import Maths from '../utils/Maths.js'
import KeyFrameData from '../project/data/KeyFrameData.js'

export default class KeyFrame extends KeyFrameData {

    constructor() {
        super()
        this.id = Maths.generateId()
    }

    /**
     * @return {string}
     */
    getName(){
        return ''
    }

}