import ClientError from '../exception/type/ClientError.js'
import AnimationProperty from './AnimationProperty.js'
import Maths from '../utils/Maths.js'
import AnimationData from '../project/data/AnimationData.js'

export default class Animation extends AnimationData {

    /**
     * @type {boolean}
     */
    playing

    /**
     * @type {number}
     */
    assetId

    /**
     * @type {number}
     */
    time

    /**
     * @type {number}
     */
    selectedTime

    /**
     * @type {number}
     */
    loopTimes

    /**
     * @type {boolean}
     */
    selected

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
     * @param {string} componentName
     * @param {string} attributeName
     * @return {AnimationProperty}
     */
    getProperty(componentName, attributeName){
        return this.getProperties().find(prop => prop.getComponentName() === componentName &&
            prop.getAttributeName() === attributeName)
    }

    /**
     * @param {string} componentName
     * @param {string} attributeName
     */
    addProperty(componentName, attributeName){
        const newProperty = new AnimationProperty(Maths.generateId(), componentName, attributeName)
        this.getProperties().push(newProperty)
        return newProperty
    }

    /**
     * @param {string} componentName
     * @param {string} attributeName
     * @param {KeyFrame} frame
     */
    addFrame(componentName, attributeName, frame) {
        const property = this.getProperty(componentName, attributeName) || this.addProperty(componentName, attributeName)
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

    /**
     * @return {KeyFrame}
     */
    getSelectedFrame(){
        return this.getProperties().reduce(
            (frame, animationProperty) => animationProperty.getSelectedFrame() , null)
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

    /**
     * @param {number} assetId
     */
    setAssetId(assetId){
        this.assetId = assetId
    }

    /**
     * @return {number}
     */
    getAssetId(){
        return this.assetId
    }

    /**
     * @param {boolean} playing
     */
    setPlaying(playing) {
        this.playing = playing
    }

    /**
     * @return {boolean}
     */
    isPlaying() {
        return this.playing
    }

    /**
     * @return {number}
     */
    getSelectedTime() {
        return this.selectedTime
    }

    /**
     * @param {number} selectedTime
     */
    setSelectedTime(selectedTime){
        this.selectedTime = selectedTime
    }

    /**
     * @return {number}
     */
    getTime() {
        return this.time
    }

    /**
     * @param {number} time
     */
    setTime(time) {
        this.time = time
    }

    /**
     * @param {number|string} loopTimes
     */
    setLoopTimes(loopTimes) {
        this.loopTimes = parseInt(loopTimes)
    }

    /**
     * @return {number}
     */
    getLoopTimes() {
        return this.loopTimes
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