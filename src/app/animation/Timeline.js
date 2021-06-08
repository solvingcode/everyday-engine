import Maths from '../utils/Maths.js'

export default class Timeline {

    /**
     * @type {number}
     */
    id

    /**
     * @type {KeyFrame}
     */
    frame

    /**
     * @type {boolean}
     */
    selected

    /**
     * @param {KeyFrame} frame
     */
    constructor(frame) {
        this.id = Maths.generateId()
        this.frame = frame
        this.selected = false
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
    getId(){
        return this.id
    }

    /**
     * @param {KeyFrame} frame
     */
    setFrame(frame){
        this.frame = frame
    }

    /**
     * @return {KeyFrame}
     */
    getFrame(){
        return this.frame
    }

    /**
     * @return {boolean}
     */
    isSelected(){
        return this.selected
    }

    /**
     * @param {boolean} selected
     */
    setSelected(selected){
        this.selected = selected
    }

    /**
     * @return {string}
     */
    getName(){
        return ''
    }

}