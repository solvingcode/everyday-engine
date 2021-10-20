import Data from './Data.js'

export default class AnimationPropertyData extends Data {

    /**
     * @type {number}
     */
    id

    /**
     * @type {string}
     */
    name

    /**
     * @type {KeyFrame[]}
     */
    frames

    /**
     * @type {boolean}
     */
    selected

    constructor() {
        super()
        this.frames = []
    }

    /**
     * @param {number} id
     */
    setId(id) {
        this.id = id
    }

    /**
     * @return {number}
     */
    getId() {
        return this.id
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
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

    /**
     * @param {KeyFrame[]} frames
     */
    setFrames(frames) {
        this.frames = frames
    }

    /**
     * @return {KeyFrame[]}
     */
    getFrames() {
        return this.frames
    }

}