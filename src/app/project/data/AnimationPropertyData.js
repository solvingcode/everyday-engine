import Data from './Data.js'

export default class AnimationPropertyData extends Data {

    /**
     * @type {number}
     */
    id

    /**
     * @type {string}
     */
    componentName

    /**
     * @type {string}
     */
    attributeName

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
     * @param {string} componentName
     */
    setComponentName(componentName){
        this.componentName = componentName
    }

    /**
     * @return {string}
     */
    getComponentName(){
        return this.componentName
    }

    /**
     * @param {string} attributeName
     */
    setAttributeName(attributeName){
        this.attributeName = attributeName
    }

    /**
     * @return {string}
     */
    getAttributeName(){
        return this.attributeName
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