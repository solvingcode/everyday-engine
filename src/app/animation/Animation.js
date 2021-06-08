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
     * @param {string} name
     */
    constructor(name) {
        this.name = name
        this.id = Maths.generateId()
        this.frames = []
        this.timeline = []
        this.playing = false
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
     * @param {number} samples
     */
    setSamples(samples) {
        this.samples = samples
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
            } else {
                throw new ClientError(`Cannot add frame at "${frame.getTime()}": Frame already exist`)
            }
        } else {
            throw new ClientError(`Cannot add frame at "${frame.getTime()}": Out of range`)
        }
    }

    /**
     * @param {number} time
     * @return {KeyFrame}
     */
    tryGetAt(time) {
        return this.frames.find(frame => frame.getTime() === time)
    }

    updateTimeline() {
        const times = [...Array(this.getSamples()).keys()]
        this.timeline = times.map(time => new Timeline(this.tryGetAt(time)))
    }

    /**
     * @return {Timeline[]}
     */
    getTimeline() {
        return this.timeline
    }
}