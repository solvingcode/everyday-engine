import ClientError from '../exception/type/ClientError.js'
import AnimationProperty from './AnimationProperty.js'
import Maths from '../utils/Maths.js'
import AnimationData from '../project/data/AnimationData.js'

export default class Animation extends AnimationData {

    /**
     * @param {number} id
     * @param {string} name
     */
    constructor(id, name) {
        super()
        this.id = id
        this.name = name
        this.samples = 10
        this.playing = false
        this.time = 0
        this.duration = 0
        this.loopTimes = 0
        this.lengthSecond = 1
        this.selected = false
    }

    /**
     * @param {number|string} samples
     */
    setSamples(samples) {
        super.setSamples(samples)
        this.updateTimeline()
    }

    /**
     * @param {number} time
     * @return {KeyFrame[]}
     */
    getAt(time) {
        const frames = this.tryGetAt(time)
        if (!frames.length) {
            throw new ClientError(`No keyframe found at ${time}`)
        }
        return frames
    }

    /**
     * @param {number} time
     * @return {KeyFrame[]}
     */
    tryGetAt(time) {
        return this.getProperties().map(property => property.tryGetAt(time)).filter(frame => frame)
    }

    /**
     * @param {string} property
     * @return {AnimationProperty}
     */
    getProperty(property){
        return this.getProperties().find(prop => prop.getName() === property)
    }

    /**
     * @param {string} propertyName
     */
    addProperty(propertyName){
        const newProperty = new AnimationProperty(Maths.generateId(), propertyName)
        this.getProperties().push(newProperty)
        return newProperty
    }

    /**
     * @param {string} propertyName
     * @param {KeyFrame} frame
     */
    addFrame(propertyName, frame) {
        const property = this.getProperty(propertyName) || this.addProperty(propertyName)
        if (frame.getTime() < this.getDuration()) {
            if (!property.tryGetAt(frame.getTime())) {
                property.addFrame(frame)
            } else {
                throw new ClientError(`Cannot add frame at "${frame.getTime()}": Frame already exist`)
            }
        } else {
            throw new ClientError(`Cannot add frame at "${frame.getTime()}": Out of range`)
        }
    }

    /**
     * @param {AnimationProperty} property
     * @param {KeyFrame} frame
     */
    deleteFrame(property, frame) {
        const frameIndex = property.getFrames().findIndex(pFrame => pFrame === frame)
        if (frame.getTime() < this.getDuration()) {
            if (property.tryGetAt(frame.getTime())) {
                property.getFrames().splice(frameIndex, 1)
            } else {
                throw new ClientError(`Cannot delete frame at "${frame.getTime()}": No frame exist`)
            }
        } else {
            throw new ClientError(`Cannot delete frame at "${frame.getTime()}": Out of range`)
        }
    }

    updateTimeline() {
        this.setDuration(Math.ceil(this.getSamples() * this.getLengthSecond()))
    }

    /**
     * @return {number}
     */
    getFrameTime() {
        return this.getFrameTimeAt(this.time)
    }

    /**
     * @param {number} time
     * @return {number}
     */
    getFrameTimeAt(time){
        return Math.floor(time)
    }

    /**
     * @return {number}
     */
    getNextTimeFrame(){
        return this.getNextTimeFrameAt(this.getTime())
    }

    /**
     * @param {number} time
     * @return {number}
     */
    getNextTimeFrameAt(time){
        const newTime = time + 1
        return newTime % this.duration
    }

    /**
     * @param {number} deltaTime
     * @param {number} time
     * @return {{time: number, loopTimes: number, frames: KeyFrame[]}}
     */
    playAt(deltaTime, time){
        const expectedFrameTime = this.getLengthSecond() / this.getSamples()
        const newTime = time + deltaTime / expectedFrameTime
        const timeFrame = newTime % this.duration || 0
        const loopTimes = Math.floor(newTime / this.duration)
        return {
            time: timeFrame,
            loopTimes,
            frames: this.tryGetAt(this.getFrameTimeAt(time))
        }
    }

    /**
     * @param {number} deltaTime
     * @return {KeyFrame[]}
     */
    play(deltaTime) {
        const playInfo = this.playAt(deltaTime, this.getTime())
        this.loopTimes += playInfo.loopTimes
        this.setTime(playInfo.time)
        this.setSelectedTime(this.getFrameTime())
        return playInfo.frames
    }

}