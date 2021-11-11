import Data from './Data.js'

export default class AnimationPropertyData extends Data {

    /**
     * @type {number}
     */
    id

    /**
     * @type {number}
     */
    childId

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
     * @param {number} childId
     */
    setChildId(childId) {
        this.childId = childId
    }

    /**
     * @return {number}
     */
    getChildId() {
        return this.childId
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

    /**
     * @param {KeyFrame[]} frames
     */
    concatFrames(frames){
        this.setFrames(frames)
    }

}