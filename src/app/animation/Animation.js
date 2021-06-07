import Maths from '../utils/Maths.js'
import ClientError from '../exception/type/ClientError.js'

export default class Animation {

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
     * @param {string} name
     */
    constructor(name) {
        this.name = name
        this.id = Maths.generateId()
        this.frames = []
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
     * @param {string} name
     */
    setName(name){
        this.name = name
    }

    /**
     * @return {string}
     */
    getName(){
        return this.name
    }

    /**
     * @param {KeyFrame[]} frames
     */
    setFrames(frames){
        this.frames = frames
    }

    /**
     * @return {KeyFrame[]}
     */
    getFrames(){
        return this.frames
    }

    /**
     * @param {number} time
     * @return {KeyFrame}
     */
    getAt(time){
        const frame = this.tryGetAt(time)
        if(!frame){
            throw new ClientError(`No keyframe found at ${time}`)
        }
        return frame
    }

    /**
     * @param {KeyFrame} frame
     */
    addFrame(frame){
        this.frames.push(frame)
    }

    /**
     * @param {number} time
     * @return {KeyFrame}
     */
    tryGetAt(time) {
        return this.frames.find(frame => frame.getTime === time)
    }
}