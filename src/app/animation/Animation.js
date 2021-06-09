import Maths from '../utils/Maths.js'
import ClientError from '../exception/type/ClientError.js'
import Timeline from './Timeline.js'

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
     * @type {number}
     */
    samples

    /**
     * @type {boolean}
     */
    playing

    /**
     * @type {Timeline[]}
     */
    timeline

    /**
     * @type {number}
     */
    time

    /**
     * @type {number}
     */
    lengthSecond

    /**
     * @param {string} name
     */
    constructor(name) {
        this.name = name
        this.id = Maths.generateId()
        this.frames = []
        this.timeline = []
        this.samples = 10
        this.playing = false
        this.time = 0
        this.lengthSecond = 1
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
     * @param {KeyFrame[]} frames
     */
    setFrames(frames) {
        this.frames = frames
        this.updateTimeline()
    }

    /**
     * @return {KeyFrame[]}
     */
    getFrames() {
        return this.frames
    }

    /**
     * @param {number|string} samples
     */
    setSamples(samples) {
        this.samples = parseInt(samples)
        this.updateTimeline()
    }

    /**
     * @return {number}
     */
    getSamples() {
        return this.samples
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
        const timeline = this.timeline[frame.getTime()]
        if (timeline) {
            if (!timeline.getFrame()) {
                timeline.setFrame(frame)
                this.frames.push(frame)
                this.updateTimeline()
            } else {
                throw new ClientError(`Cannot add frame at "${frame.getTime()}": Frame already exist`)
            }
        } else {
            throw new ClientError(`Cannot add frame at "${frame.getTime()}": Out of range`)
        }
    }

    /**
     * @param {KeyFrame} frame
     */
    deleteFrame(frame){
        const timeline = this.timeline[frame.getTime()]
        const frameIndex = this.frames.findIndex(pFrame => pFrame === frame)
        if (timeline) {
            if (timeline.getFrame()) {
                timeline.setFrame(null)
                this.frames.splice(frameIndex, 1)
                this.updateTimeline()
            } else {
                throw new ClientError(`Cannot delete frame at "${frame.getTime()}": No frame exist`)
            }
        } else {
            throw new ClientError(`Cannot delete frame at "${frame.getTime()}": Out of range`)
        }
    }

    /**
     * @param {number} time
     * @return {KeyFrame}
     */
    tryGetAt(time) {
        return this.frames.find(frame => frame.getTime() === time)
    }

    /**
     * @return {Timeline}
     */
    getSelectedTimeline(){
        return this.timeline.find(pTimeline => pTimeline.isSelected())
    }

    /**
     * @return {number}
     */
    getSelectedTime(){
        return this.timeline.findIndex(pTimeline => pTimeline === this.getSelectedTimeline())
    }

    updateTimeline() {
        const times = [...Array(this.getSamples() * this.getLengthSecond()).keys()]
        this.timeline = times.map(time => new Timeline(this.tryGetAt(time)))
    }

    /**
     * @return {Timeline[]}
     */
    getTimeline() {
        return this.timeline
    }

    /**
     * @return {number}
     */
    getTime(){
        return this.time
    }

    /**
     * @param {number} time
     */
    setTime(time){
        this.time = time
    }

    /**
     * @return {number}
     */
    getFrameTime(){
        return Math.floor(this.time)
    }

    /**
     * @param {number} lengthSecond
     */
    setLengthSecond(lengthSecond) {
        this.lengthSecond = lengthSecond
    }

    /**
     * @return {number}
     */
    getLengthSecond() {
        return this.lengthSecond
    }

}