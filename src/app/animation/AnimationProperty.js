import ClientError from '../exception/type/ClientError.js'
import AnimationPropertyData from '../project/data/AnimationPropertyData.js'

export default class AnimationProperty extends AnimationPropertyData {

    /**
     * @param {number} id
     * @param {string} componentName
     * @param {string} attributeName
     */
    constructor(id, componentName, attributeName) {
        super()
        this.id = id
        this.componentName = componentName
        this.attributeName = attributeName
        this.selected = false
    }

    /**
     * @return {string}
     */
    getName(){
        return `${this.getComponentName()} - ${this.getAttributeName()}`
    }

    /**
     * @param {number} time
     * @return {KeyFrame}
     */
    getAt(time) {
        const frame = this.tryGetAt(time)
        if (!frame) {
            throw new ClientError(`No keyframe found at ${time}`)
        }
        return frame
    }

    /**
     * @param {KeyFrame} frame
     */
    addFrame(frame) {
        this.frames.push(frame)
    }

    /**
     * @param {KeyFrame} frame
     */
    deleteFrame(frame) {
        const frameIndex = this.frames.findIndex(pFrame => pFrame === frame)
        this.frames.splice(frameIndex, 1)
    }

    /**
     * @param {number} time
     * @return {KeyFrame}
     */
    tryGetAt(time) {
        return this.frames.find(frame => frame.getTime() === time)
    }

    /**
     * @return {KeyFrame}
     */
    getSelectedFrame(){
        return this.getFrames().find(frame => frame.getSelected())
    }

}