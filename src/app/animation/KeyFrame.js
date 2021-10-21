import Maths from '../utils/Maths.js'
import KeyFrameData from '../project/data/KeyFrameData.js'

export default class KeyFrame extends KeyFrameData {

    /**
     * @type {boolean}
     */
    selected

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

    /**
     * @return {boolean}
     */
    getSelected(){
        return this.selected
    }

    /**
     * @param {boolean} selected
     */
    setSelected(selected){
        this.selected = selected
    }

}